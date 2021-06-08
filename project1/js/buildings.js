const svg =
    d3
        .select('#chart-area')
        .append('svg')
        .attr('width', 900)
        .attr('height', 400);

d3.json('data/buildings.json')
    .then(chartData => {

        chartData.forEach(d => {
            d.height = Number(d.height);
        });

        const yScale = d3
            .scaleLinear()
            .domain([0, 828])
            .range([0, 400])

        const rects = svg
            .selectAll('rect')
            .data(chartData);

        rects
            .enter()
            .append('rect')
            .attr('x', (d, i) => (i * 60) + 10)
            .attr('y', 10)
            .attr('width', 50)
            .attr('height', (d) => yScale(d.height))
            .attr('fill', () => 'grey')
    })
    .catch((err) => {
        console.log(err);
    });
