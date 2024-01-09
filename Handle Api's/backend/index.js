import express from 'express'


const app = express()

app.get('/api/products', (req, res) => {
    const images = [
        {
            id: 1,
            name: 'rising sun',
            image : 'https://images.unsplash.com/photo-1613226505855-999302e0c08d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGl4ZWx8ZW58MHx8MHx8fDA%3D'
        },
        {
            id: 2,
            name: 'building',
            image : 'https://images.unsplash.com/photo-1578930174110-7dfc3797713f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHBpeGVsfGVufDB8fDB8fHww'
        },
        {
            id: 3,
            name: 'globe',
            image : 'https://images.unsplash.com/photo-1633421878925-ac220d8f6e4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpeGVsfGVufDB8fDB8fHww'
        },
        {
            id: 4,
            name: 'building',
            image : 'https://images.unsplash.com/photo-1508195578732-2d3d3eacf15f?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8NDI0OTYwN3x8ZW58MHx8fHx8'
        },
        {
            id: 5,
            name: 'art',
            image : 'https://images.unsplash.com/photo-1508019446171-9a8c71554f97?dpr=1&h=147&w=126&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8aHI3WDhrNTZpVEV8fGVufDB8fHx8fA%3D%3D'
        },
        {
            id: 6,
            name: 'globe',
            image : 'https://images.unsplash.com/photo-1652650445101-3bb4f755b67c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw2TnJyaHZmRlNKd3x8ZW58MHx8fHx8'
        },
        {
            id: 7,
            name: 'nature',
            image : 'https://images.unsplash.com/photo-1508528075895-be7a6cabd37a?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MjUyODAxNnx8ZW58MHx8fHx8'
        },
    ]

    if (req.query.search) {
        const filterImg = images.filter(img => img.name.toLowerCase().includes(req.query.search))
        res.send(filterImg)
        return;
    }



    // the response will be send after 3 sec 
    setTimeout(() => {
        res.send(images)
    }, 3000)
})


const port = 8080

app.listen(port, () => {
    console.log(`server listening on ${port}`);
})