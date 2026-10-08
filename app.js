console.log('Node.js is working!')
const http = require('http')

const server = http.createServer((req, res) => {

    if (req.method === 'GET' && req.url === '/') {
        res.end('Home page')
    }

    else if (req.method === 'GET' && req.url === '/about') {
        res.end('About page')
    }

    else if (req.method === 'GET' && req.url === '/api/student') {
        res.setHeader('Content-Type', 'application/json')
        student.numberReq += 1
        res.end(JSON.stringify(student))
    } 

    else if (req.method === 'GET' && req.url === '/student') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')

        res.end(`
            <h1>${student.name}</h1>
            <p>${student.group}</p>
            <p>${student.speciality}</p>
            `
        )
    }

    else if (req.method === 'GET' && req.url === '/time') {
        res.setHeader('Content-Type', 'text/html; charset=utf-8')
        const time = getTime()
        res.end(`<h1>${time}</h1>`)
    }

    else if (req.method === 'GET' && req.url === '/courses') {
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify(courses))
    }

    else if (req.method === 'GET' && req.url === '/myURL') {
        res.setHeader('Content-Type', 'application/json')

        req.end(JSON.stringify(selfConst))
    }

    else {
        res.statusCode(404)
        res.end('404 - Page not found')
    }
})

server.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
})

const student = {
            name: 'Ivan Trembaci',
            group: 'IA2302',
            speciality: 'Applied Informatics',
            numberReq: 0
        }

        function getTime() {
            const date = new Date()
            const currentTime = date.toLocaleTimeString()
            console.log(currentTime)
            return currentTime
        }

const courses = [{
    id: 1,
    title: "Data Structures and Algorithms",
    code: "CS101",
    professor: "Dr. Alan Turing",
    credits: 6
  },
  {
    id: 2,
    title: "Database Management Systems",
    code: "CS201",
    professor: "Prof. Sarah Jenkins",
    credits: 5
  },
  {
    id: 3,
    title: "Web Development",
    code: "CS205",
    professor: "Dr. Michael Scott",
    credits: 4
  },
  {
    id: 4,
    title: "Machine Learning Fundamentals",
    code: "CS301",
    professor: "Prof. Andrew Ng",
    credits: 6
  },
  {
    id: 5,
    title: "Discrete Mathematics",
    code: "MATH101",
    professor: "Dr. Donald Knuth",
    credits: 3
  }]

  const selfConst = [{
    type : "vehicle",
    brand : "KIA",
    model : "Cerat",
    fuelType : "Diesel"
  }]