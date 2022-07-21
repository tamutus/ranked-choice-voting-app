import { shallowMount, RouterLinkStub } from "@vue/test-utils";

import MainNav from "@/components/ui/MainNav.vue";

describe("MainNav", () => {
  const createConfig = () => ({
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  const wrapper = shallowMount(MainNav, createConfig());

  const menuItemTexts = wrapper
    .findAll("[data-test='main-nav-item']")
    .map((item) => item.text());
  describe("displays menu items for navigation", () => {
    it("as 'li's", () => {
      expect(menuItemTexts).toEqual(["RCV", "Bubbles", "Elections"]);
    });
    describe("has a Home link", () => {
      it("displays the a home link", () => {
        expect(wrapper.text()).toMatch("RCV");
      });
    });
  });
});
