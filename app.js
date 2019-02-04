const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <script type="text/javascript">
          console.log('hello world!')
        </script>
      </head>
    </html>
  `)
})

app.listen(3333, () => {
  console.log('Listening on port 3333...')
})