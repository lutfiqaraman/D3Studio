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

        const rects = svg
            .selectAll('rect')
            .data(chartData);

        rects.enter().append('rect')
            .attr('y', (d, i) => (i * 60) + 10)
            .attr('x', 0)
            .attr('width', (d) => d.height)
            .attr('height', 50)
            .attr('fill', () => "hsl(" + Math.random() * 360 + ",100%,50%)")
    })
    .catch((err) => {
        console.log(err);
    });
