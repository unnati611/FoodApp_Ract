import { render, screen } from "@testing-library/react";
import Restaurentcard from "../Restaurentcard";
import MOCK_DATA from "../../Utils/mocks/recardmock.json";
import RestaurentCardPromoted from "../Restaurentcard";

it("should render Restaurent card component with prop Data", () => {
  render(<Restaurentcard resdata={MOCK_DATA}></Restaurentcard>);
  const restoName = screen.getByText("Pizza Hut");
  expect(restoName).toBeInTheDocument();
});
it("should not apply Promoted label when average rating is below threshold", () => {
  const mockDataWithLowRating = {
    ...MOCK_DATA,
    info: { ...MOCK_DATA.info, avgRating: 3.5 },
  };
  render(
    <RestaurentCardPromoted
      resdata={mockDataWithLowRating}
    ></RestaurentCardPromoted>
  );
  const promotedLabel = screen.queryByText("Promoted");
  expect(promotedLabel).not.toBeInTheDocument();
});
