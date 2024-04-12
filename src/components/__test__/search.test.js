// import { render, screen } from "@testing-library/react";
// import Body from "../Body";
// import MOCK_DATA from "../../Utils/mocks/mockRestroListdata.json";
// import { act } from "react-dom/test-utils";
// import { BrowserRouter } from "react-router-dom";
// import "@testing-library/jest-dom";

// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });
// it("should render the body comonent with searchbtn", async () => {
//   await act(async () =>
//     render(
//       <BrowserRouter>
//         <Body />
//       </BrowserRouter>
//     )
//   );
//   const searchbtn = screen.getByRole("button", { name: "Search" });
//   expect(searchbtn).toBeInTheDocument();
// });
