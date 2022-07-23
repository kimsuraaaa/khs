/*
내가 임의로 정한 매개변수로 받으려는 객체 구조. 지속 업데이트 예정.
{
	meta: { barWidth: ${Number}, boxHeight: ${Number}, hoverAction: ${Boolean}, unit: {String}, radius: ${Number} },
	data: [
		{ name: ${String}, value: ${Number}, color: ${String ColorCode} },
		...
	],
}
*/
function chartBar(chartData) {
  const data = chartData.data; // chart 상세 Data
  const width = chartData.meta.boxWidth; // 차트 영역의 가로값.
  const height = chartData.meta.boxHeight; // 차트 영역의 세로값.
  const chartRadius = chartData.meta.radius; // 차트 모서리 radius.
  const hoverAction = chartData.meta.hoverAction; // hover Action 여부.
  const chartUnit = chartData.meta.unit; // 차트 단위.
  const margin = { top: 40, left: 40, bottom: 40, right: 40 }; // margin 값을 객체로 지정해둔다.

  // x
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.name)) // x축과 매칭되는 이름을 찾는다. 시작되는 입력 영역
    .range([margin.left, width - margin.right]) // x축 그래프 출력범위 (40, 400 - 40)
    .padding(0.5); // 그래프 두께의 padding 값. 0 ~ 1 사이로 적용.

  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)]) // 입력영역
    .nice()
    .range([height - margin.bottom, margin.top]); // 출력범위로 매핑

  const xAxis = (g) =>
    g
      .attr('transform', `translate(0, ${height - margin.bottom})`)
      .call(d3.axisBottom(x).tickSizeOuter(0))
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('line').remove());

  const yAxis = (g) =>
    g
      .attr('transform', `translate(${margin.left}, 0)`)
      .call(d3.axisLeft(y))
      .call((g) => g.select('.domain').remove())
      .call((g) => g.selectAll('line').attr('x2', width).style('stroke', '#f5f5f5'));

  document.getElementById('svgChartBar').innerHTML = '<div id="tooltip"></div>';

  // svg 변수에 어떤 #svgChartBar 선택자에, svg 타입으로 추가하고, 그래프의 크기 width, height만큼 지정한다.
  const svg = d3.select('#svgChartBar').append('svg').style('width', width).style('height', height);

  svg.append('g').call(xAxis);
  svg.append('g').call(yAxis);
  svg
    .append('g')
    .selectAll('rect')
    .data(data)
    .enter()
    .append('rect')
    .attr('x', (d) => x(d.name)) // 데이터와 매칭되는 요소에서 시작됨.
    .attr('y', (d) => y(d.value)) // y축 시작점
    .attr('rx', chartRadius) // 그래프 radius 값.
    .attr('width', x.bandwidth()) // 그래프 폭.
    .attr('data-x', (d) => d.name) // 마우스 오버 데이터 이름.
    .attr('data-y', (d) => d.value) // 마우스 오버 데이터 값.
    .attr('data-color', (d) => d.color) // 마우스 오버 데이터 박스 bg.
    .transition() // 모션을 줄거야, 이 분기점 기준으로 아래에 선언.
    .duration(1500) // 속도는 1.5s.
    .attr('height', (d) => y(0) - y(d.value)) // 높이값 지정.
    .attr('fill', (d) => d.color); // 차트 막대 bg.

  svg.node();

  const rectEl = document.getElementsByTagName('rect');
  const tooltop = document.getElementById('tooltip');

  if (hoverAction) {
    for (const el of rectEl) {
      el.addEventListener('mouseover', (event) => {
        const target = event.target;
        const positionLeft =
          Number(target.getAttribute('x')) + Number(x.bandwidth() / 2) - tooltop.clientWidth / 2;
        const positionTop =
          height - margin.top - target.getAttribute('height') - tooltop.clientHeight - 5;
        const color = target.dataset.color;
        const value = target.dataset.y;

        tooltop.innerText = value + chartUnit;
        tooltop.style.background = color;
        tooltop.style.top = positionTop + 'px';
        tooltop.style.left = positionLeft + 'px';
        tooltop.style.opacity = 1;
      });
    }
  }
}
