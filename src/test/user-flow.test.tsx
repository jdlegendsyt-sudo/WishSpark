import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import App from "@/App";

vi.mock("@vercel/analytics/react", () => ({
  Analytics: () => null,
}));

vi.mock("@/components/AdBanner", () => ({
  default: () => null,
}));

vi.mock("@/components/JsonLd", () => ({
  default: () => null,
}));

describe("Real user flow", () => {
  it("should complete homepage -> tool use -> blog -> homepage journey", async () => {
    const user = userEvent.setup();

    window.history.pushState({}, "", "/");
    render(<App />);

    expect(await screen.findByText(/WishSpark/i)).toBeInTheDocument();

    const toolLink = document.querySelector('a[href="/tools/love-calculator"]');
    expect(toolLink).toBeTruthy();
    await user.click(toolLink as HTMLAnchorElement);

    expect(
      await screen.findByRole("heading", { name: /Love Calculator/i }),
    ).toBeInTheDocument();

    await user.type(screen.getByLabelText(/Your Name/i), "Amal");
    await user.type(screen.getByLabelText(/Partner's Name/i), "Maya");
    await user.click(screen.getByRole("button", { name: /Calculate Love/i }));

    expect(await screen.findByText(/%/i)).toBeInTheDocument();

    const blogLink = document.querySelector('a[href="/blog"]');
    expect(blogLink).toBeTruthy();
    await user.click(blogLink as HTMLAnchorElement);

    expect(
      await screen.findByRole("heading", { name: /WishSpark Blog/i }),
    ).toBeInTheDocument();

    const homeLink = document.querySelector('a[href="/"]');
    expect(homeLink).toBeTruthy();
    await user.click(homeLink as HTMLAnchorElement);

    await waitFor(() => {
      expect(screen.getByText(/Free Festival Greeting Card Maker Online/i)).toBeInTheDocument();
    });
  });
});
