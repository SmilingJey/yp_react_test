import React from 'react'

/*
  data не используется и нет в propTypes
*/
const NotFound = ({ data }) => {
  return (
    /*
      Вместо React.Fragment можно использовать 
      упрощенную запись <>
    */
    <React.Fragment>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
    </React.Fragment>
  )
}

export default NotFound
