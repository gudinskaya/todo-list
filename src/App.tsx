import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { TodosPage } from './pages/TodosPage'
import { AboutPage } from './pages/AboutPage'
import  Animations from './pages/Animations'

const App: React.FC = () => {
//TODO 1. Лучше не писать перехватчики для нажатия Enter -- используйте form.onSubmit. Да, кстати, кнопку для сабмита тоже добавить. Это решение позволит работать с формой не только с клавиатуры, но и с помощью мыши (copy/paste etc).

//TODO 2. toggleHandler -- должен был вернуть новые, изменненый todo. в данном проекте, мы этого не заметили, но если где-то этот todo будет пробрасываться, как значение в пропс, то React может этот компонент и не перерендерить (т.к. ссылка не поменяется, а детали переданного объекта Реакт проверять не будет)

//TODO 3. Как показал рефакторинг с большим числом копи-паста (кстати, проще было сразу файл перенести) -- изначально все положили не очень удачно. Кроме того, файл с объявлением интерфейса ITodo, как-то по-сиротски оказался в корне ...).

//TODO Правильный подход -- это было создать кастомную хуку: useTodos, в которую положить управление состоянием и хуки для персистенса. Объявление ITodo отлично было бы положить как раз в том же файле, где такая кастомная хука объявляется. Ну и сам Реакт поощрает создание кастомных хуков.

//TODO 4. Из-за того, что мы не делали кастомную хуку, мы смешали код, который управляет состоянием с кодом, который отвечает за взаимодействие с пользователем -- это есть плохо. Например, если где-то мы захотим удалить туду без подтверждения, то уже не сможем.  

  return (
    <BrowserRouter>
      <Navbar/>
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact/>
          <Route component={AboutPage} path="/about"/>
          <Route component={Animations} path="/animations"/>
        </Switch>
      </div>
    </BrowserRouter>) 
}

export default App
