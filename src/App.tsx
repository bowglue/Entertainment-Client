import { Outlet, useLocation, useOutlet } from "react-router-dom";
import useScrollToTop from "./hooks/useScrollToTop";
import Layout from "./layout/Layout";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./App.css";
import { routes } from "./routes";
import { useRef } from "react";

function App() {
  // useScrollToTop();
  const location = useLocation();
  const outlet = useOutlet();
  const nodeRef = useRef(null);
  return (
    <Layout>
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={200}
          classNames="page"
          unmountOnExit={false}
        >
          {(state) => (
            <div ref={nodeRef} className="page">
              {outlet}
            </div>
          )}
        </CSSTransition>
      </SwitchTransition>
    </Layout>
  );
}

export default App;
