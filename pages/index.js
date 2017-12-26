export default () => (
  <div>
    <div className="links">
      <a href="www.linkedin.com/in/marcelo-zapaia-a78a3832"
         target="_blank"
         className="animated swing">
        <img src="/static/logos/lnkd.png" />
      </a>
      <a href="https://github.com/qzapaia"
         target="_blank"
         className="animated swing">
        <img src="/static/logos/gh.png" />
      </a>
      <a href="https://www.instagram.com/pone.lee/"
         target="_blank"
         className="animated swing">
        <img src="/static/logos/ig.png" />
      </a>
      <a href="https://medium.com/@zapaiamarce"
         target="_blank"
         className="animated swing">
        <img src="/static/logos/medium.png" />
      </a>
    </div>

    <style global jsx>{`
      *{
        box-sizing:border-box;
      }
      body{
        margin:0;
        background-color:#eee;
        color:#fafafa;
        font-size:22px;
      }

      .links{
        display:flex;
        min-height:100vh;
        align-items:center;
        justify-content:center;
        width:100%;
      }

      a{
        color:#ddd;
        text-decoration:none;
        font-family: 'Bungee', cursive;
        margin:15px;
        transition:all .2s;
      }
      a:hover{

      }

      img{
        height:40px;
      }

    `}</style>
  </div>
)
