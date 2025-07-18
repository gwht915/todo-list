const express = require('express')
const app = express()
const port = 3000

//const Todo = require('./models/todo') // 載入 Todo model (因為用了Router的功能, 所以可以刪掉)

// 引用路由器
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

require('./config/mongoose')

const exphbs = require('express-handlebars');

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

const mongoose = require('mongoose'); // 載入 mongoose

// 引用 body - parser
const bodyParser = require('body-parser')

  // 載入 method-override
const methodOverride = require('method-override')

//const todo = require('./models/todo');   

//mongoose.connect(process.env.MONGODB_URI) // 設定連線到 mongoDB
//mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

// 用 app.use 規定每一筆請求都需要透過 body-parser 進行前置處理
app.use(bodyParser.urlencoded({ extended: true }))

/*
// 取得資料庫連線狀態
const db = mongoose.connection
// 連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
// 連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})
*/

// 設定每一筆請求都會透過 methodOverride 進行前置處理
app.use(methodOverride('_method'))

// 將 request 導入路由器
app.use(routes)

// routes setting
/*
app.get('/', (req, res) => {
  res.send('This is my todo list built with Express')
}) 
*/

/*
app.get('/', (req, res) => {
  //res.render('index')
  Todo.find() // 取出 Todo model 裡的所有資料
    .lean() // 把 Mongoose 的 Model 物件轉換成乾淨的 JavaScript 資料陣列
    .sort({ name: 'asc' }) // 新增這裡：根據 _id 升冪排序
    .then(todos => res.render('index', { todos })) // 將資料傳給 index 樣板
    .catch(error => console.error(error)) // 錯誤處理
})
*/
/*
app.get('/todos/new', (req, res) => {
  return res.render('new')
})

app.get('/todos', (req, res) => {
  res.send('get all todos')
})

app.post('/todos', (req, res) => {
  const name = req.body.name       // 從 req.body 拿出表單裡的 name 資料
  //return Todo.create({ name })     // 存入資料庫 (first method)
  const todo = new Todo({name})
  return todo.save()
    .then(() => res.redirect('/')) // 新增完成後導回首頁
    .catch(error => console.log(error))
})

app.get('/todos/:id', (req, res) => {
  const id = req.params.id
  console.log(`id = ${id}`)
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('detail', { todo }))
    .catch(error => console.log(error))
})
    */

/*
app.get('/todos/:id', (req, res) => {
  res.send(`get todo: ${req.params.id}`)
})

app.get('/todos/:id/edit', (req, res) => {
  res.send(`get todo edit: ${req.params.id}`)
})

*/
/*
app.get('/todos/:id/edit', (req, res) => {
  const id = req.params.id
  return Todo.findById(id)
    .lean()
    .then((todo) => res.render('edit', { todo }))
    .catch(error => console.log(error))
}) */

/*
app.post('/todos/:id/edit', (req, res) => {
  const id = req.params.id
  const name = req.body.name
  return Todo.findById(id)
    .then(todo => {
      todo.name = name
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})
*/

/*
//app.post('/todos/:id/edit', (req, res) => {
app.put('/todos/:id', (req, res) => {
  const id = req.params.id
  const { name, isDone } = req.body
  console.log(`req.body=${req.body}`)
  console.log(`req=${req.body.name}, ${req.body.isDone}`)
  return Todo.findById(id)
    .then(todo => {
      todo.name = name
      todo.isDone = isDone === 'on'
      return todo.save()
    })
    .then(() => res.redirect(`/todos/${id}`))
    .catch(error => console.log(error))
})

//app.post('/todos/:id/delete', (req, res) => {
app.delete('/todos/:id', (req, res) => {
  const id = req.params.id
  console.log(`id 111 = ${id}`)
  return Todo.findByIdAndDelete(id)
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
}) */

/*
app.post('/todos/:id/delete', (req, res) => {
  const id = req.params.id
  console.log(`id 111 = ${id}`)
  return Todo.findById(id)
    .then(todo => todo.deleteOne())    //updated in version Mongoose@7.0 or over
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})
*/
   
/*
app.post('/todos/:id/delete', (req, res) => {
  const id = req.params.id
  Todo.findById(id, (err, todo) => {
    if (err) return console.error(err)
      todo.remove(err => {
        if (err) return console.log(err)
          return res.redirect('/')
    })
  })
})
*/  
/*
app.put('/todos/:id', (req, res) => {
  res.send('modify todo')
})

app.delete('/todos/:id', (req, res) => {
  res.send('delete todo')
})
*/

app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})