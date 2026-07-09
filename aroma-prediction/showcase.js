const targets = [
  "特征香嗅香",
  "特征香抽吸",
  "香味协调",
  "香气质",
  "香气量",
  "余味酸",
  "余味甜",
  "余味苦",
  "口腔刺激",
  "鼻腔刺激",
  "喉部刺激",
  "劲头",
  "烟气细腻程度",
  "烟气充盈程度",
  "烟气上扬程度",
  "均匀性",
  "残留",
];

const demoRows = [
  {
    样本序号: 1,
    SMILES: "C1=CC=C(C=C1)CCO",
    物质名称: "苯乙醇",
    CAS号: "60-12-8",
    香气强度预测值: 66.626,
    综合评分: 0.273,
    许可库状态: "在烟草制品许可使用的添加剂内",
    最高相似度: 1.0,
    可靠性: "高可靠",
    数据来源: "结构参照数据",
    相似分子推荐: "苯乙醇(1.000)；苯甲醇(0.704)；苯乙醛(0.622)",
    预警原因: "结构参照数据中已命中该分子，展示参照结果。",
    特征香嗅香: 1.108,
    特征香抽吸: 0.875,
    香味协调: 0.434,
    香气质: 0.437,
    香气量: 0.775,
    余味酸: 0.192,
    余味甜: 0.093,
    余味苦: 0.051,
    口腔刺激: 0.478,
    鼻腔刺激: 0.007,
    喉部刺激: 0.162,
    劲头: 0.07,
    烟气细腻程度: 0.119,
    烟气充盈程度: 0.075,
    烟气上扬程度: 0.127,
    均匀性: -0.002,
    残留: 0.0,
  },
  {
    样本序号: 2,
    SMILES: "CCCCCSC",
    物质名称: "甲基戊基硫醚",
    CAS号: "",
    香气强度预测值: 42.184,
    综合评分: 0.338,
    许可库状态: "未确认在烟草制品许可使用的添加剂内",
    最高相似度: 0.418,
    可靠性: "中等可靠",
    数据来源: "模型预测",
    相似分子推荐: "二甲基硫醚(0.418)；甲硫醇(0.355)；乙基硫醚(0.334)",
    预警原因: "最高结构相似度偏低，预测结果需结合实际评价谨慎参考。",
    特征香嗅香: 1.251,
    特征香抽吸: 0.896,
    香味协调: 0.523,
    香气质: 0.468,
    香气量: 0.879,
    余味酸: 0.125,
    余味甜: 0.102,
    余味苦: 0.071,
    口腔刺激: 0.478,
    鼻腔刺激: 0.033,
    喉部刺激: 0.159,
    劲头: 0.05,
    烟气细腻程度: 0.196,
    烟气充盈程度: 0.064,
    烟气上扬程度: 0.081,
    均匀性: -0.004,
    残留: 0.378,
  },
  {
    样本序号: 3,
    SMILES: "O=C=O",
    物质名称: "二氧化碳",
    CAS号: "124-38-9",
    香气强度预测值: "",
    综合评分: "",
    许可库状态: "未确认在烟草制品许可使用的添加剂内",
    最高相似度: 0.125,
    可靠性: "不可靠",
    数据来源: "输入筛查",
    相似分子推荐: "2-甲基丁醛(0.125)；丙酮(0.111)；乙酸乙酯(0.097)",
    预警原因: "输入分子与候选数据集中已知分子相似度较低，不展示感官评分。",
  },
  {
    样本序号: 4,
    SMILES: "CCOC(=O)C",
    物质名称: "乙酸乙酯",
    CAS号: "141-78-6",
    香气强度预测值: 58.471,
    综合评分: 0.246,
    许可库状态: "在烟草制品许可使用的添加剂内",
    最高相似度: 0.736,
    可靠性: "较可靠",
    数据来源: "模型预测",
    相似分子推荐: "乙酸异戊酯(0.736)；乙酸丁酯(0.681)；乳酸乙酯(0.604)",
    预警原因: "结构相似度达到参考范围，可作为筛选结果使用。",
    特征香嗅香: 0.682,
    特征香抽吸: 0.533,
    香味协调: 0.386,
    香气质: 0.341,
    香气量: 0.512,
    余味酸: 0.146,
    余味甜: 0.118,
    余味苦: 0.044,
    口腔刺激: 0.263,
    鼻腔刺激: 0.022,
    喉部刺激: 0.089,
    劲头: 0.041,
    烟气细腻程度: 0.174,
    烟气充盈程度: 0.102,
    烟气上扬程度: 0.114,
    均匀性: 0.031,
    残留: 0.189,
  },
];

let rows = [demoRows[0]];
let chartType = "radar";
const selectedTargets = new Set(targets);

const $ = (id) => document.getElementById(id);
const els = {
  appShell: $("appShell"),
  sampleSmiles: $("sampleSmiles"),
  sampleName: $("sampleName"),
  sampleCas: $("sampleCas"),
  singlePredictBtn: $("singlePredictBtn"),
  batchDemoBtn: $("batchDemoBtn"),
  templateBtn: $("templateBtn"),
  targetList: $("targetList"),
  toggleTargetsBtn: $("toggleTargetsBtn"),
  sortSelect: $("sortSelect"),
  exportBtn: $("exportBtn"),
  summaryGrid: $("summaryGrid"),
  resultTable: $("resultTable"),
  resultCount: $("resultCount"),
  analysisStatus: $("analysisStatus"),
  sampleSelect: $("sampleSelect"),
  chartRadarBtn: $("chartRadarBtn"),
  chartBarBtn: $("chartBarBtn"),
  sampleChart: $("sampleChart"),
  chartDetail: $("chartDetail"),
  riskChart: $("riskChart"),
  aromaChart: $("aromaChart"),
  similarBlock: $("similarBlock"),
  toast: $("toast"),
};

function showToast(message) {
  els.toast.textContent = message;
  els.toast.hidden = false;
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    els.toast.hidden = true;
  }, 3200);
}

function renderTargets() {
  els.targetList.innerHTML = "";
  targets.forEach((target) => {
    const label = document.createElement("label");
    label.className = "target-item";
    const input = document.createElement("input");
    input.type = "checkbox";
    input.checked = selectedTargets.has(target);
    input.addEventListener("change", () => {
      if (input.checked) selectedTargets.add(target);
      else selectedTargets.delete(target);
      renderCharts();
      updateSortOptions();
    });
    label.append(input, document.createTextNode(target));
    els.targetList.appendChild(label);
  });
}

function updateSortOptions() {
  const oldValue = els.sortSelect.value || "样本序号";
  const options = ["样本序号", "综合评分", "香气强度预测值", "最高相似度", "可靠性", ...selectedTargets];
  els.sortSelect.innerHTML = "";
  options.forEach((name) => {
    const opt = document.createElement("option");
    opt.value = name;
    opt.textContent = name;
    els.sortSelect.appendChild(opt);
  });
  els.sortSelect.value = options.includes(oldValue) ? oldValue : "样本序号";
}

function currentTargets() {
  return targets.filter((target) => selectedTargets.has(target));
}

function useSingleDemo() {
  const text = [els.sampleSmiles.value, els.sampleName.value, els.sampleCas.value].join(" ");
  const row = demoRows.find((item) => text.includes(item.SMILES) || text.includes(item.物质名称) || text.includes(item.CAS号));
  rows = [row || demoRows[0]];
  renderAll();
  showToast("静态展示页已载入内置示例，真实预测请运行后端系统。");
}

function useBatchDemo() {
  rows = [...demoRows];
  renderAll();
}

function sortedRows() {
  const key = els.sortSelect.value || "样本序号";
  const data = [...rows];
  data.sort((a, b) => {
    if (key === "样本序号") return Number(a[key] || 0) - Number(b[key] || 0);
    const av = Number(a[key]);
    const bv = Number(b[key]);
    if (Number.isFinite(av) && Number.isFinite(bv)) return bv - av;
    return String(a[key] || "").localeCompare(String(b[key] || ""), "zh-Hans-CN");
  });
  return data;
}

function renderAll() {
  renderTargets();
  updateSortOptions();
  renderSummary();
  renderTable();
  renderCharts();
}

function renderSummary() {
  const data = sortedRows();
  const aromaValues = data.map((row) => Number(row.香气强度预测值)).filter(Number.isFinite);
  const maxSim = Math.max(...data.map((row) => Number(row.最高相似度)).filter(Number.isFinite), 0);
  const avgAroma = aromaValues.length ? average(aromaValues) : "";
  els.summaryGrid.innerHTML = `
    <div class="metric"><span>样品数量</span><strong>${data.length}</strong></div>
    <div class="metric"><span>预测指标</span><strong>${currentTargets().length}</strong></div>
    <div class="metric"><span>香气强度均值</span><strong>${fmt(avgAroma)}</strong></div>
    <div class="metric"><span>最高相似度</span><strong>${fmt(maxSim)}</strong></div>
  `;
}

function renderTable() {
  const data = sortedRows();
  els.resultCount.textContent = `${data.length} 条结果`;
  els.analysisStatus.textContent = data.length ? "已更新" : "等待预测";
  const headers = [
    "样本序号",
    "SMILES",
    "物质名称",
    "CAS号",
    "香气强度预测值",
    "综合评分",
    "许可库状态",
    "最高相似度",
    "可靠性",
    "相似分子推荐",
    "预警原因",
  ];
  els.resultTable.innerHTML = "";
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  headers.forEach((key) => {
    const th = document.createElement("th");
    th.textContent = key;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  const tbody = document.createElement("tbody");
  data.forEach((row) => {
    const item = document.createElement("tr");
    headers.forEach((key) => {
      const td = document.createElement("td");
      td.dataset.label = key;
      if (key === "可靠性") {
        const pill = document.createElement("span");
        pill.className = `risk-pill ${riskClass(row[key])}`;
        pill.textContent = row[key] || "";
        td.appendChild(pill);
      } else {
        td.textContent = fmtCell(row[key]);
      }
      if (key === "相似分子推荐" || key === "预警原因" || key === "许可库状态") td.className = "text-cell";
      item.appendChild(td);
    });
    tbody.appendChild(item);
  });
  els.resultTable.append(thead, tbody);
}

function renderCharts() {
  const data = sortedRows();
  renderSampleSelect(data);
  renderSampleChart(data);
  renderRiskChart(data);
  renderAromaChart(data);
  renderSimilar(data);
}

function renderSampleSelect(data) {
  const old = els.sampleSelect.value;
  els.sampleSelect.innerHTML = "";
  data.forEach((row, index) => {
    const opt = document.createElement("option");
    opt.value = String(index);
    opt.textContent = `${row.样本序号}. ${row.物质名称 || row.SMILES}`;
    els.sampleSelect.appendChild(opt);
  });
  if (old && Number(old) < data.length) els.sampleSelect.value = old;
}

function renderSampleChart(data) {
  const row = data[Number(els.sampleSelect.value || 0)];
  if (!row) {
    els.sampleChart.innerHTML = '<div class="muted">暂无图表数据</div>';
    return;
  }
  const values = currentTargets()
    .map((name) => ({ name, value: Number(row[name]) }))
    .filter((item) => Number.isFinite(item.value));
  if (!values.length) {
    els.sampleChart.innerHTML = '<div class="muted">当前样品没有可绘制的感官指标</div>';
    return;
  }
  els.chartRadarBtn.classList.toggle("active", chartType === "radar");
  els.chartBarBtn.classList.toggle("active", chartType === "bar");
  els.chartDetail.hidden = true;
  els.sampleChart.innerHTML = chartType === "radar" ? radarSvg(values) : barSvg(values);
}

function renderRiskChart(data) {
  const counts = {};
  data.forEach((row) => {
    counts[row.可靠性] = (counts[row.可靠性] || 0) + 1;
  });
  const order = ["高可靠", "较可靠", "中等可靠", "不可靠", "输入错误"];
  const max = Math.max(...Object.values(counts), 1);
  els.riskChart.innerHTML = '<div class="chart-title">可靠性分布</div>';
  order.forEach((name) => {
    if (!counts[name]) return;
    const fill = riskClass(name) === "risk-high" ? "high" : riskClass(name) === "risk-mid" ? "warn" : "";
    els.riskChart.insertAdjacentHTML(
      "beforeend",
      `<div class="bar-row"><span>${name}</span><div class="bar-track"><div class="bar-fill ${fill}" style="width:${(counts[name] / max) * 100}%"></div></div><strong>${counts[name]}</strong></div>`,
    );
  });
}

function renderAromaChart(data) {
  const values = data.map((row) => Number(row.香气强度预测值)).filter(Number.isFinite);
  els.aromaChart.innerHTML = '<div class="chart-title">香气强度预测值</div>';
  if (!values.length) {
    els.aromaChart.insertAdjacentHTML("beforeend", '<div class="muted">暂无香气强度数据</div>');
    return;
  }
  els.aromaChart.insertAdjacentHTML(
    "beforeend",
    `<div class="aroma-summary">
      <div><span>均值</span><strong>${fmt(average(values))}</strong></div>
      <div><span>最低</span><strong>${fmt(Math.min(...values))}</strong></div>
      <div><span>最高</span><strong>${fmt(Math.max(...values))}</strong></div>
    </div>`,
  );
}

function renderSimilar(data) {
  const row = data[Number(els.sampleSelect.value || 0)];
  els.similarBlock.innerHTML = '<div class="chart-title">相似分子预测摘要</div>';
  if (!row) return;
  els.similarBlock.insertAdjacentHTML(
    "beforeend",
    `<div class="similar-card">
       <p>${escapeHtml(row.相似分子推荐 || "暂无")}</p>
       <span>最高相似度：${fmt(row.最高相似度)}</span>
     </div>
     <div class="similar-card">
       <p>${escapeHtml(row.预警原因 || "暂无")}</p>
       <span class="risk-pill ${riskClass(row.可靠性)}">${row.可靠性 || ""}</span>
     </div>`,
  );
}

function radarSvg(values) {
  const size = 320;
  const center = size / 2;
  const radius = 104;
  const domain = chartDomain(values);
  const axis = values.map((_, index) => {
    const angle = (Math.PI * 2 * index) / values.length - Math.PI / 2;
    return { angle, x: center + Math.cos(angle) * radius, y: center + Math.sin(angle) * radius };
  });
  const polygon = values
    .map((item, index) => {
      const ratio = normalize(item.value, domain);
      const angle = axis[index].angle;
      return `${center + Math.cos(angle) * radius * ratio},${center + Math.sin(angle) * radius * ratio}`;
    })
    .join(" ");
  const grids = [0.25, 0.5, 0.75, 1]
    .map((level) => `<polygon points="${axis.map((p) => `${center + (p.x - center) * level},${center + (p.y - center) * level}`).join(" ")}" class="radar-grid"></polygon>`)
    .join("");
  const labels = axis
    .map((p, index) => {
      const lx = center + Math.cos(p.angle) * (radius + 24);
      const ly = center + Math.sin(p.angle) * (radius + 24);
      return `<line x1="${center}" y1="${center}" x2="${p.x}" y2="${p.y}" class="radar-axis"></line><text x="${lx}" y="${ly}" class="radar-label">${shortName(values[index].name)}</text>`;
    })
    .join("");
  const dots = values
    .map((item, index) => {
      const ratio = normalize(item.value, domain);
      const angle = axis[index].angle;
      const x = center + Math.cos(angle) * radius * ratio;
      const y = center + Math.sin(angle) * radius * ratio;
      return `<circle cx="${x}" cy="${y}" r="4.5" class="radar-point chart-mark" data-name="${item.name}" data-value="${fmt(item.value)}"><title>${item.name}: ${fmt(item.value)}</title></circle>`;
    })
    .join("");
  return `<svg class="radar-svg" viewBox="0 0 ${size} ${size}" role="img">${grids}${labels}<polygon points="${polygon}" class="radar-area"></polygon><polyline points="${polygon} ${polygon.split(" ")[0]}" class="radar-line"></polyline>${dots}</svg>`;
}

function barSvg(values) {
  const width = 360;
  const rowHeight = 28;
  const left = 96;
  const top = 18;
  const plotWidth = 220;
  const height = top + values.length * rowHeight + 12;
  const domain = chartDomain(values);
  const zeroX = left + normalize(0, domain) * plotWidth;
  const bars = values
    .map((item, index) => {
      const y = top + index * rowHeight;
      const valueX = left + normalize(item.value, domain) * plotWidth;
      const x = Math.min(zeroX, valueX);
      const w = Math.max(2, Math.abs(valueX - zeroX));
      return `<text x="4" y="${y + 15}" class="bar-label">${shortName(item.name)}</text><rect x="${x}" y="${y + 4}" width="${w}" height="14" rx="3" class="chart-bar chart-mark" data-name="${item.name}" data-value="${fmt(item.value)}"></rect><text x="${left + plotWidth + 8}" y="${y + 15}" class="bar-value">${fmt(item.value)}</text>`;
    })
    .join("");
  return `<svg class="bar-svg" viewBox="0 0 ${width} ${height}" role="img"><line x1="${zeroX}" y1="8" x2="${zeroX}" y2="${height - 4}" class="zero-axis"></line>${bars}</svg>`;
}

function chartDomain(values) {
  const nums = values.map((item) => item.value);
  let min = Math.min(0, ...nums);
  let max = Math.max(1, ...nums);
  if (min === max) {
    min -= 1;
    max += 1;
  }
  return { min, max };
}

function normalize(value, domain) {
  return Math.max(0, Math.min(1, (value - domain.min) / (domain.max - domain.min)));
}

function riskClass(level) {
  if (level === "高可靠" || level === "较可靠") return "risk-low";
  if (level === "中等可靠") return "risk-mid";
  return "risk-high";
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function fmt(value) {
  if (value === "" || value === null || value === undefined || Number.isNaN(Number(value))) return "-";
  return Number(value).toFixed(3).replace(/\.?0+$/, "");
}

function fmtCell(value) {
  if (value === "" || value === null || value === undefined) return "";
  if (typeof value === "number") return fmt(value);
  return String(value);
}

function shortName(name) {
  return name.length > 7 ? `${name.slice(0, 7)}...` : name;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function downloadTemplate() {
  const note = "SMILES、物质名称、CAS号三者至少填写一种即可预测；建议优先填写SMILES。";
  const data = [
    ["SMILES", "物质名称", "CAS号", "英文名称", "填写说明"],
    ["C1=CC=C(C=C1)CO", "苯甲醇", "100-51-6", "Benzyl alcohol", note],
    ["C1=CC=C(C=C1)CCO", "", "", "", "仅填写SMILES也可以预测"],
    ["", "苯乙醇", "60-12-8", "Phenylethyl alcohol", "名称和CAS号用于辅助匹配"],
    ["O=C=O", "二氧化碳", "124-38-9", "Carbon dioxide", "低相似度样品示例"],
    ["CCCCCSC", "", "", "", "结构示例"],
    ["CCOC(=O)C", "乙酸乙酯", "141-78-6", "Ethyl acetate", "酯类样品示例"],
    ["CCO", "乙醇", "64-17-5", "Ethanol", ""],
    ["CC(C)CCO", "异戊醇", "123-51-3", "Isoamyl alcohol", ""],
    ["", "香兰素", "121-33-5", "Vanillin", "名称和CAS号组合示例"],
    ["CC(C)=CCCC(C)=CCO", "香叶醇", "106-24-1", "Geraniol", ""],
  ];
  downloadCsv(data, "批量预测模板.csv");
}

function exportCsv() {
  const headers = Object.keys(demoRows[0]).filter((key) => !targets.includes(key));
  const data = [headers, ...sortedRows().map((row) => headers.map((key) => row[key] ?? ""))];
  downloadCsv(data, "静态展示预测结果.csv");
}

function downloadCsv(data, filename) {
  const lines = data.map((row) => row.map((value) => `"${String(value).replaceAll('"', '""')}"`).join(","));
  const blob = new Blob([`\uFEFF${lines.join("\n")}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

els.singlePredictBtn.addEventListener("click", useSingleDemo);
els.batchDemoBtn.addEventListener("click", useBatchDemo);
els.templateBtn.addEventListener("click", downloadTemplate);
els.exportBtn.addEventListener("click", exportCsv);
els.sortSelect.addEventListener("change", renderAll);
els.sampleSelect.addEventListener("change", renderCharts);
els.chartRadarBtn.addEventListener("click", () => {
  chartType = "radar";
  renderCharts();
});
els.chartBarBtn.addEventListener("click", () => {
  chartType = "bar";
  renderCharts();
});
els.toggleTargetsBtn.addEventListener("click", () => {
  if (selectedTargets.size === targets.length) {
    selectedTargets.clear();
    els.toggleTargetsBtn.textContent = "全选";
  } else {
    targets.forEach((target) => selectedTargets.add(target));
    els.toggleTargetsBtn.textContent = "清空";
  }
  renderAll();
});
els.sampleChart.addEventListener("click", (event) => {
  const mark = event.target.closest?.(".chart-mark");
  if (!mark) return;
  els.chartDetail.textContent = `${mark.dataset.name}: ${mark.dataset.value}`;
  els.chartDetail.hidden = false;
});

renderAll();
