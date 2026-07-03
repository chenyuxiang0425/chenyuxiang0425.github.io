const indicators = [
  "特征香嗅香",
  "特征香抽吸",
  "香味协调",
  "香气质",
  "香气量",
  "余味甜",
];

const samples = [
  {
    id: 1,
    name: "苯乙醇",
    smiles: "C1=CC=C(C=C1)CCO",
    source: "原始数据",
    intensity: 68.05587118,
    score: 0.5277778333333333,
    similarity: 1,
    reliability: "高可靠",
    permit: "在烟草制品许可使用的添加剂内",
    similar: "苯乙醇(1.000)；苯丙醇(0.700)；苯甲醇(0.579)",
    metrics: {
      特征香嗅香: 1,
      特征香抽吸: 0.722222,
      香味协调: 0.222222,
      香气质: 0.166667,
      香气量: 0.777778,
      余味甜: 0.277778,
    },
  },
  {
    id: 2,
    name: "二氧化碳",
    smiles: "O=C=O",
    source: "模型预测",
    intensity: 61.65259906438976,
    score: 0.5355683333333333,
    similarity: 0.125,
    reliability: "不可靠",
    permit: "在烟草制品许可使用的添加剂内",
    similar: "2-甲基丁醛(0.125)；丙酮(0.111)；甲酸(0.111)",
    metrics: {
      特征香嗅香: 0.834556,
      特征香抽吸: 0.86941,
      香味协调: 0.386011,
      香气质: 0.228055,
      香气量: 0.609633,
      余味甜: 0.285745,
    },
  },
  {
    id: 3,
    name: "戊基甲硫醚示例",
    smiles: "CCCCCSC",
    source: "模型预测",
    intensity: 65.42304686731093,
    score: 0.294328,
    similarity: 0.3684,
    reliability: "不可靠",
    permit: "不在烟草制品许可使用的添加剂内",
    similar: "戊醇(0.368)；辛醇(0.350)；壬醇(0.350)",
    metrics: {
      特征香嗅香: 0.776784,
      特征香抽吸: 0.795542,
      香味协调: -0.09038,
      香气质: -0.501175,
      香气量: 0.66397,
      余味甜: 0.121227,
    },
  },
  {
    id: 4,
    name: "乙醛二乙缩醛",
    smiles: "CCOC(C)OCC",
    source: "原始数据",
    intensity: 57.46207659,
    score: 0.5714285,
    similarity: 1,
    reliability: "高可靠",
    permit: "在烟草制品许可使用的添加剂内",
    similar: "乙醛二乙缩醛(1.000)；异丁酸乙酯(0.333)；异戊烷(0.333)",
    metrics: {
      特征香嗅香: 0.928571,
      特征香抽吸: 0.857143,
      香味协调: 0.785714,
      香气质: 0.285714,
      香气量: 0.571429,
      余味甜: 0,
    },
  },
];

let selectedId = samples[0].id;
let chartMode = "radar";

const sampleSelect = document.querySelector("#sampleSelect");
const sampleCards = document.querySelector("#sampleCards");
const chart = document.querySelector("#chart");
const chartDetail = document.querySelector("#chartDetail");
const resultTable = document.querySelector("#resultTable");
const radarBtn = document.querySelector("#radarBtn");
const barBtn = document.querySelector("#barBtn");

const numberFormatter = new Intl.NumberFormat("zh-CN", {
  minimumFractionDigits: 3,
  maximumFractionDigits: 3,
});

function formatValue(value, digits = 3) {
  return Number(value).toFixed(digits);
}

function selectedSample() {
  return samples.find((sample) => sample.id === selectedId) || samples[0];
}

function reliabilityClass(sample) {
  if (sample.reliability.includes("高")) return "good";
  if (sample.reliability.includes("不")) return "bad";
  return "warn";
}

function permitClass(sample) {
  return sample.permit.startsWith("在") ? "good" : "bad";
}

function renderOptions() {
  sampleSelect.innerHTML = samples
    .map((sample) => `<option value="${sample.id}">${sample.id}. ${sample.name}</option>`)
    .join("");
  sampleSelect.value = String(selectedId);
}

function renderCards() {
  const sample = selectedSample();
  const cards = [
    {
      label: "SMILES",
      value: sample.smiles,
      note: "唯一结构输入优先展示",
    },
    {
      label: "综合评分",
      value: formatValue(sample.score),
      note: sample.source,
    },
    {
      label: "香气强度预测值",
      value: formatValue(sample.intensity),
      note: "单独评分，不并入感官评价指标",
    },
    {
      label: "最高相似度",
      value: formatValue(sample.similarity),
      note: sample.reliability,
    },
  ];

  sampleCards.innerHTML = cards
    .map(
      (card) => `
        <article class="sample-card">
          <span>${card.label}</span>
          <strong>${card.value}</strong>
          <small>${card.note}</small>
        </article>
      `,
    )
    .join("");
}

function metricRows(sample) {
  return indicators.map((label) => ({
    label,
    value: sample.metrics[label],
  }));
}

function setDetail(label, value) {
  chartDetail.textContent = `${selectedSample().name}：${label} = ${numberFormatter.format(value)}`;
}

function renderChart() {
  const sample = selectedSample();
  chartDetail.textContent = "点击图中的点或柱查看数值。";
  if (chartMode === "bar") {
    renderBarChart(sample);
  } else {
    renderRadarChart(sample);
  }
}

function renderRadarChart(sample) {
  const rows = metricRows(sample);
  const width = 760;
  const height = 420;
  const cx = width / 2;
  const cy = height / 2 + 10;
  const radius = 135;
  const min = -0.6;
  const max = 1.1;
  const levels = 4;

  const normalize = (value) => Math.max(0, Math.min(1, (value - min) / (max - min)));
  const point = (index, valueRadius) => {
    const angle = -Math.PI / 2 + (Math.PI * 2 * index) / rows.length;
    return {
      x: cx + Math.cos(angle) * valueRadius,
      y: cy + Math.sin(angle) * valueRadius,
    };
  };

  const rings = Array.from({ length: levels }, (_, levelIndex) => {
    const ringRadius = (radius * (levelIndex + 1)) / levels;
    const coords = rows.map((_, index) => point(index, ringRadius));
    return `<polygon points="${coords.map((p) => `${p.x},${p.y}`).join(" ")}" fill="none" stroke="#d8e0ea" />`;
  }).join("");

  const axes = rows
    .map((row, index) => {
      const axisPoint = point(index, radius);
      const labelPoint = point(index, radius + 42);
      return `
        <line x1="${cx}" y1="${cy}" x2="${axisPoint.x}" y2="${axisPoint.y}" stroke="#d8e0ea" />
        <text x="${labelPoint.x}" y="${labelPoint.y}" text-anchor="middle" dominant-baseline="middle" fill="#344054" font-size="14">${row.label}</text>
      `;
    })
    .join("");

  const dataPoints = rows.map((row, index) => point(index, radius * normalize(row.value)));
  const polygon = dataPoints.map((p) => `${p.x},${p.y}`).join(" ");
  const circles = rows
    .map((row, index) => {
      const p = dataPoints[index];
      return `
        <circle class="chart-point" data-label="${row.label}" data-value="${row.value}" cx="${p.x}" cy="${p.y}" r="6" fill="#0f8b8d" stroke="#fff" stroke-width="2">
          <title>${row.label}: ${formatValue(row.value)}</title>
        </circle>
      `;
    })
    .join("");

  chart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${sample.name}核心感官指标雷达图">
      <rect width="${width}" height="${height}" fill="#fff" />
      ${rings}
      ${axes}
      <polygon points="${polygon}" fill="rgba(15, 139, 141, 0.18)" stroke="#0f8b8d" stroke-width="3" />
      ${circles}
      <text x="24" y="34" fill="#667085" font-size="13">显示范围：-0.600 至 1.100</text>
    </svg>
  `;

  chart.querySelectorAll(".chart-point").forEach((node) => {
    node.addEventListener("click", () => setDetail(node.dataset.label, Number(node.dataset.value)));
    node.addEventListener("mouseenter", () => setDetail(node.dataset.label, Number(node.dataset.value)));
  });
}

function renderBarChart(sample) {
  const rows = metricRows(sample);
  const width = 760;
  const height = 420;
  const left = 70;
  const right = 24;
  const top = 32;
  const bottom = 96;
  const min = -0.6;
  const max = 1.1;
  const plotWidth = width - left - right;
  const plotHeight = height - top - bottom;
  const zeroY = top + ((max - 0) / (max - min)) * plotHeight;
  const band = plotWidth / rows.length;
  const barWidth = Math.min(58, band * 0.58);
  const y = (value) => top + ((max - value) / (max - min)) * plotHeight;

  const grid = [-0.5, 0, 0.5, 1].map((tick) => {
    const tickY = y(tick);
    return `
      <line x1="${left}" y1="${tickY}" x2="${width - right}" y2="${tickY}" stroke="#d8e0ea" />
      <text x="${left - 12}" y="${tickY + 4}" text-anchor="end" fill="#667085" font-size="12">${tick.toFixed(1)}</text>
    `;
  }).join("");

  const bars = rows
    .map((row, index) => {
      const x = left + index * band + (band - barWidth) / 2;
      const barY = row.value >= 0 ? y(row.value) : zeroY;
      const barHeight = Math.abs(zeroY - y(row.value));
      const color = row.value >= 0 ? "#2454a6" : "#b42318";
      return `
        <rect class="bar-mark" data-label="${row.label}" data-value="${row.value}" x="${x}" y="${barY}" width="${barWidth}" height="${barHeight}" rx="5" fill="${color}">
          <title>${row.label}: ${formatValue(row.value)}</title>
        </rect>
        <text x="${x + barWidth / 2}" y="${height - 68}" text-anchor="middle" fill="#344054" font-size="12">${row.label}</text>
        <text x="${x + barWidth / 2}" y="${row.value >= 0 ? barY - 8 : barY + barHeight + 18}" text-anchor="middle" fill="#344054" font-size="12">${formatValue(row.value)}</text>
      `;
    })
    .join("");

  chart.innerHTML = `
    <svg viewBox="0 0 ${width} ${height}" role="img" aria-label="${sample.name}核心感官指标柱状图">
      <rect width="${width}" height="${height}" fill="#fff" />
      ${grid}
      <line x1="${left}" y1="${zeroY}" x2="${width - right}" y2="${zeroY}" stroke="#344054" stroke-width="1.5" />
      ${bars}
      <text x="24" y="34" fill="#667085" font-size="13">正负值共同展示，便于识别低评分指标</text>
    </svg>
  `;

  chart.querySelectorAll(".bar-mark").forEach((node) => {
    node.addEventListener("click", () => setDetail(node.dataset.label, Number(node.dataset.value)));
    node.addEventListener("mouseenter", () => setDetail(node.dataset.label, Number(node.dataset.value)));
  });
}

function renderTable() {
  const sortedSamples = [...samples].sort((a, b) => a.id - b.id);
  resultTable.innerHTML = `
    <thead>
      <tr>
        <th>样本序号</th>
        <th>物质名称</th>
        <th>SMILES</th>
        <th>数据来源</th>
        <th>综合评分</th>
        <th>香气强度预测值</th>
        <th>最高相似度</th>
        <th>可靠性</th>
        <th>许可清单状态</th>
        <th>相似分子推荐</th>
      </tr>
    </thead>
    <tbody>
      ${sortedSamples
        .map(
          (sample) => `
            <tr>
              <td>${sample.id}</td>
              <td>${sample.name}</td>
              <td class="mono">${sample.smiles}</td>
              <td><span class="pill neutral">${sample.source}</span></td>
              <td>${formatValue(sample.score)}</td>
              <td>${formatValue(sample.intensity)}</td>
              <td>${formatValue(sample.similarity)}</td>
              <td><span class="pill ${reliabilityClass(sample)}">${sample.reliability}</span></td>
              <td><span class="pill ${permitClass(sample)}">${sample.permit}</span></td>
              <td>${sample.similar}</td>
            </tr>
          `,
        )
        .join("")}
    </tbody>
  `;
}

function setMode(mode) {
  chartMode = mode;
  radarBtn.classList.toggle("active", mode === "radar");
  barBtn.classList.toggle("active", mode === "bar");
  renderChart();
}

sampleSelect.addEventListener("change", (event) => {
  selectedId = Number(event.target.value);
  renderCards();
  renderChart();
});

radarBtn.addEventListener("click", () => setMode("radar"));
barBtn.addEventListener("click", () => setMode("bar"));

renderOptions();
renderCards();
renderChart();
renderTable();
