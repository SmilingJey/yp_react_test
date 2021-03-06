## Список вопросов:

- **Можно ли упростить инфраструктуру проекта? Как бы вы посоветовали ее реорганизовать?**
  - часть пакетов установленных в dependencies должны быть в devDependencies
  - настроить historyApiFallback: true для девсервера вебпака
  - мне более привычно когда actions лежат рядом с их редьюсерами, но тут на любителя

- **Корректно ли написаны тесты для компонент? Корректно ли валидируются пропсы?**
  - снапшот тестирует только главную страницу. Тестировать нужно все роуты, например с помощью MemoryRouter. 
  - лучше делать снапшоты отдельных компонентов, а не всего дерева т.к. тесты будет падать при изменении любого отображаемого компонента, для этого можно воспользоваться react-test-renderer/shallow
  - нет e2e тестов, например для формы входа
  - в NotFound не используется пропс data и его нет в propTypes
  - в Profile опечатка, должно быть Profile.propTypes
  - тесты eslint не проходят

- **Корректно ли выполняется рендер компонент?**
  - в LinkButton получается кнопка обернутая в ссылку, что не валидно с точки зрения разметки
  - у полей формы авторизации вместо data-field-name можно было задать просто name  

- **Правильно ли настроены все роуты, в том числе и защищенные?**
  - логично было бы если после авторизации пользователя нельзя было зайти на форму логина и редиректило с неё на главную
  
  с остальным проблем не нашел, вроде все ок - приватные роуты работаю через проверку авторизации беря состояние из хранилица
  
- **Оптимально ли написаны компоненты? Правильно ли выделены функциональные компоненты?**
  - ProfileContainer можно не описывать как отдельный компонент
  - обработку событий формы лучше вынести в HOC, а редирест в хук, сделав Login функциональным компонентом
  - вынесение подключения к redux в ProfileContainer LoginContainer в отдельные от компоненты считается хорошей практикой, но впринципе не является обязательным т.к. всеравно никак не переиспользуется

- **Корректно ли описаны `Actions`, `Reducers`?**
  - при диспатче ошибки авторизации error: true, - нигде не используется, в любом случае все данные должны быть в payload
  - в редьюсере при выходе просто сбрасывать в initialState
  - лучше вынести создание Action в ActionCreator, а actions одного домена лучше объединить в объект
  
  в проекте используется redux-think, видимо планируется, что запрос авторизации будет отправляться на сервер,который сейчас имитируется функцией checkCredentials

**Есть несоответсвие того, что описано в задании в README.md и того, что описано в приложении**
  - Если url битый - редирект на `/kvazavr`  - редиректа нет, отображается компонент NotFound

# Реализовано простое приложение, без подключения к БД.

## Задание:
Роуты:
+ `/` - главная
+ `/login` - страница ввода логина и пароля
+ `/profile` - страница с произвольным текстом, недоступная без авторизации
+ `/kvazavr` - 404

В шапке есть ссылки:

+ На главную (`/`)
+ Профиль (`/profile`)
+ Логин (`/login`)
+ 404 (`/kvazavr`)

Если url битый - редирект на `/kvazavr`

Если пользователь не авторизован -- перекидывает на страницу `/login`.
Моковые данные для входа: user: student, password: student

Если данные инвалидны, то:
Имя пользователя или пароль некорректны

Если данные валидны: редирект на `/profile`

