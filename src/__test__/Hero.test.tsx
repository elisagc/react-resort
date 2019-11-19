import { render } from "@testing-library/react";
import * as faker from "faker";
import React from "react";
import Hero from "../components/Hero";

test("if hero prop is used as classname & render children prop", async () => {
  const className = faker.lorem.word();
  const children = <div data-testid="hero-children">Hero children</div>;
  const { getByTestId } = render(<Hero hero={className} children={children} />);

  const hero = getByTestId("hero");
  const heroChildren = getByTestId("hero-children");

  expect(hero).toHaveClass(className);
  expect(heroChildren).toHaveTextContent("Hero children");
});
