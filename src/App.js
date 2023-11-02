import React from "react";

// 일반 함수를 이용한 컴포넌트
function App() {
  const navArr = [{ title: "html" }, { title: "css" }, { title: "js" }];
  return (
    <div className="root">
      <Header title="리액트(React)" nav={navArr} />
      <Article title="리액트란?" desc="desc1" />
      <Article title="컴포넌트란?" desc="desc2" />
      <Article title="props란?" desc="desc3" />
    </div>
  );
}

function Header({ title, nav }) {
  // props.nav = [{ title: "html" }, { title: "css" }, { title: "js" }];
  // const { title, nav } = props;
  return (
    <header>
      <h1>{title}</h1>
      <Nav nav={nav} />
    </header>
  );
}

function Nav({ nav }) {
  // props.nav = [{ title: "html" }, { title: "css" }, { title: "js" }];
  // const {nav} = props
  return (
    <nav>
      <ul>
        {nav.map((item, index) => (
          <li key={index}>
            <a href={"/sub/" + item.title + "html"}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
  // map()함수를 사용한 배열 출력
  // const list = props.nav.map((item, index) => (
  //   <li key={index}>
  //     <a href={"/sub/" + item.title + "html"}>{item.title}</a>
  //   </li>
  // ));
}

function Article({ title, desc }) {
  // const { title, desc } = props;
  return (
    <article>
      <h2>{title}</h2>
      <p>{desc}</p>
    </article>
  );
}

// 화살표 함수를 사용한 컴포넌트
// const App = () => {
//   return <>hi</>;
// };

// 내보내기(App을 기본으로 내보내기)
export default App;
