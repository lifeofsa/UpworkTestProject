import React, { useCallback, useState } from "react";
import {
  Frame,
  Navigation,
  AppProvider,
  TopBar,
  Text,
  Icon,
  ActionList,
} from "@shopify/polaris";
import {
  HomeMinor,
  OrdersMinor,
  ProductsMinor,
  CustomersMinor,
  ContentMinor,
  FinancesMinor,
  AnalyticsMinor,
  MarketingMinor,
  DiscountsMinor,
  OnlineStoreMinor,
  ChevronRightMinor,
  ArrowLeftMinor,
  QuestionMarkMajor,
} from "@shopify/polaris-icons";
import translations from "@shopify/polaris/locales/en.json";
import iconito from "../assets/iconito.png";
import TrustIconIconito from "./TrustIconIconito";

const StyleTab = () => {
  // TopBar
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isSecondaryMenuOpen, setIsSecondaryMenuOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const toggleIsSecondaryMenuOpen = useCallback(
    () => setIsSecondaryMenuOpen((isSecondaryMenuOpen) => !isSecondaryMenuOpen),
    []
  );

  const handleSearchResultsDismiss = useCallback(() => {
    setIsSearchActive(false);
    setSearchValue("");
  }, []);

  const handleSearchChange = useCallback((value) => {
    setSearchValue(value);
    setIsSearchActive(value.length > 0);
  }, []);

  const handleNavigationToggle = useCallback(() => {
    console.log("toggle navigation visibility");
  }, []);

  const logo = {
    width: 124,
    topBarSource:
      "https://res.cloudinary.com/dbtqvhete/image/upload/v1681665114/hsufmssnzqumty8uqu10.png",

    url: "#",
    accessibilityLabel: "asdasdas",
  };

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          items: [{ content: "Back to Shopify", icon: ArrowLeftMinor }],
        },
        {
          items: [{ content: "Community forums" }],
        },
      ]}
      name="Dharma"
      detail="Jaded Pixel"
      initials="D"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const searchResultsMarkup = (
    <ActionList
      items={[
        { content: "Shopify help center" },
        { content: "Community forums" },
      ]}
    />
  );
  const imageIconito = () => {
    return <img src={iconito} />;
  };

  const searchFieldMarkup = (
    <TopBar.SearchField
      onChange={handleSearchChange}
      value={searchValue}
      placeholder="Search"
      showFocusBorder
    />
  );

  const secondaryMenuMarkup = (
    <TopBar.Menu
      activatorContent={
        <span>
          <Icon source={QuestionMarkMajor} />
          <Text as="span" visuallyHidden>
            Secondary menu
          </Text>
        </span>
      }
      open={isSecondaryMenuOpen}
      onOpen={toggleIsSecondaryMenuOpen}
      onClose={toggleIsSecondaryMenuOpen}
      actions={[
        {
          items: [{ content: "Community forums" }],
        },
      ]}
    />
  );

  const topBarMarkup = (
    <TopBar
      showNavigationToggle
      userMenu={userMenuMarkup}
      secondaryMenu={secondaryMenuMarkup}
      searchResultsVisible={isSearchActive}
      searchField={searchFieldMarkup}
      searchResults={searchResultsMarkup}
      onSearchResultsDismiss={handleSearchResultsDismiss}
      onNavigationToggle={handleNavigationToggle}
    />
  );
  // Navigation Markup
  const navigationMarkup = (
    <Navigation location="/">
      <Navigation.Section
        items={[
          {
            url: "#",
            label: "Home",
            icon: HomeMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Orders",
            icon: OrdersMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Products",
            icon: ProductsMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Customers",
            icon: CustomersMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Content",
            icon: ContentMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Finances",
            icon: FinancesMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Analytics",
            icon: AnalyticsMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Marketing",
            icon: MarketingMinor,
            excludePaths: ["#"],
          },
          {
            url: "#",
            label: "Discounts",
            icon: DiscountsMinor,
            excludePaths: ["#"],
          },
        ]}
      />
      <Navigation.Section
        title="Sales channels"
        items={[
          {
            url: "#",
            label: "Online Store",
            icon: OnlineStoreMinor,
            excludePaths: ["#"],
          },
        ]}
        action={{
          accessibilityLabel: "add sales channels",
          icon: ChevronRightMinor,
        }}
        separator
      />
      <Navigation.Section
        title="Apps"
        items={[
          {
            url: "#",
            label: "Trust badges & icons - Ico..",
            icon: imageIconito,
            //   shouldResizeIcon: true,
          },
        ]}
      />
    </Navigation>
  );
  return (
    <>
      <AppProvider>
        <Frame topBar={topBarMarkup} navigation={navigationMarkup} logo={logo}>
          <TrustIconIconito />
        </Frame>
      </AppProvider>
    </>
  );
};

export default StyleTab;
