const svg =
    d3
    .select('#chart-area')
    .append('svg')
        .attr('width', 900)
        .attr('height', 400);

d3.json('data/ages.json')
    .then(data => {

        data.forEach(d => {
            d.age = Number(d.age);
        });

        const circles = svg.selectAll('circle').data(data);

        circles
            .enter()
            .append('circle')
            .attr('cx', (d, i) => (i * 50) + 100)
            .attr('cy', 200)
            .attr('r', d => 1.75 * d.age)
            .attr('fill', d => {
                if (d.name === 'Tony') {
                    return 'red';
                } else {
                    return 'blue';
                }
            });
    })
    .catch((err) => {
        console.log(err);
    });
