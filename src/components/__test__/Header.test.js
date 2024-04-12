import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header.js";
import appStore from "../../Utils/appStore.js";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";

it("sholud render Header component with Login button", () => {
  //   render(<Header />);
  //if you are using react-redux we have  to use provider with store to our Component
  //if you are using Link from router we have to provide router to our Component

  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const groccery = screen.getByText("GROCCERY");
  expect(groccery).toBeInTheDocument();
});

it("should render Heder Component with Cart items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);
  expect(cartItems).toBeInTheDocument();
});
// it("should change Login btn to logOUt on click event", () => {
//   render(
//     <BrowserRouter>
//       <Provider store={appStore}>
//         <Header />
//       </Provider>
//     </BrowserRouter>
//   );
//   const Loginbtn = screen.getByRole("button", { name: "LOGIN" });
//   fireEvent.click(Loginbtn);
//   const Logoutbtn = screen.getByRole("button", { name: "LOGOUT" });
//   expect(Loginbtn).toBeInTheDocument();
// });
