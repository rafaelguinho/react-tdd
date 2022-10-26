import { render, screen } from "@testing-library/react";
import MessageList from "./MessageList";

describe("<MessageList />", () => {
  describe("listing mensages", () => {
    it("Read listed messages", async () => {
      const data = ["Item 1", "Item 2"];

      render(<MessageList data={data} />);

      expect(screen.getByTestId("messageItem_0").textContent).toEqual("Item 1");
      expect(screen.getByTestId("messageItem_1").textContent).toEqual("Item 2");
    });
  });
});
