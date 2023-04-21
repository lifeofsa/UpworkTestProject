import React, { useCallback, useState } from "react";
import {
  Page,
  Layout,
  LegacyCard,
  LegacyStack,
  Text,
  Button,
  RangeSlider,
  TextField,
  Select,
  PageActions,
  Toast,
  ButtonGroup,
} from "@shopify/polaris";
import {
  CircleAlertMajor,
  ChecklistAlternateMajor,
  MobileChevronMajor,
  BuyButtonHorizontalLayoutMajor,
} from "@shopify/polaris-icons";
import trustbadge from "../assets/iconito.png";

const TrustIconIconito = () => {
  const [iconRangeValue, setIconRangeValue] = useState(50);
  const [blockRangeValue, setBlockRangeValue] = useState(0);
  const [spaceBetweenRangeValue, setspaceBetweenRangeValue] = useState(0);
  const [colorBackground, setColorBackground] = useState("#ffffff");
  const [colorTitle, setColorTitle] = useState("#000000");
  const [colorIcon, setColorIcon] = useState("#000000");
  const [colorSubtitle, setColorSubtitle] = useState("#000000");
  const [titleFont, setTitleFont] = useState("14");
  const [subtitleFont, setSubtitleFont] = useState("12");
  const [Goesup, setGoesup] = useState("0");
  const [GoesDown, setGoesDown] = useState("0");
  const [RegularFont, setRegularFont] = useState();
  const [BoldFont, setBoldFont] = useState();
  const [active, setActive] = useState(false);

  const toggleActive = useCallback(() => setActive((active) => !active), []);

  const toastMarkup = active ? (
    <Toast
      content="Form Submitted"
      action={{
        onAction: () => {},
      }}
      duration={10000}
      onDismiss={toggleActive}
    />
  ) : null;

  const backgroundColor = (
    <div style={{ paddingTop: "5px" }}>
      <span
        style={{ backgroundColor: `${colorBackground}`, borderColor: "black" }}
        class="dot"
      ></span>
    </div>
  );
  const TitleColor = (
    <div style={{ paddingTop: "5px" }}>
      <span
        style={{ backgroundColor: `${colorTitle}`, borderColor: "black" }}
        class="dot"
      ></span>
    </div>
  );
  const IconColor = (
    <div style={{ paddingTop: "5px" }}>
      <span
        style={{ backgroundColor: `${colorIcon}`, borderColor: "black" }}
        class="dot"
      ></span>
    </div>
  );
  const SubtitleColor = (
    <div style={{ paddingTop: "5px" }}>
      <span
        style={{ backgroundColor: `${colorSubtitle}`, borderColor: "black" }}
        class="dot"
      ></span>
    </div>
  );
  return (
    <div>
      <Page fullWidth>
        <Layout>
          <Layout.Section>
            <LegacyCard sectioned>
              <div
                style={{
                  justifyContent: "space-around",
                }}
              >
                <LegacyStack distribution="equalSpacing">
                  <LegacyStack>
                    <img width="23px" src={trustbadge} />
                    <Text fontWeight="bold">
                      Iconito - Trust Badges & Icons
                    </Text>
                  </LegacyStack>
                  <LegacyStack>
                    <div style={{ color: "#0a83ed" }}>
                      <Button icon={CircleAlertMajor} monochrome outline>
                        <Text fontWeight="bold">Tutorial</Text>
                      </Button>
                    </div>
                    <div style={{ color: "#0a83ed" }}>
                      <Button icon={ChecklistAlternateMajor} monochrome outline>
                        <Text fontWeight="bold">Plan List</Text>
                      </Button>
                    </div>
                    <div style={{ color: "#0a83ed" }}>
                      <Button
                        icon={BuyButtonHorizontalLayoutMajor}
                        monochrome
                        outline
                      >
                        <Text fontWeight="bold">Integrations</Text>
                      </Button>
                    </div>
                    <div style={{ color: "#0a83ed" }}>
                      <Button icon={CircleAlertMajor} monochrome outline>
                        <Text fontWeight="bold">Help Center</Text>
                      </Button>
                    </div>
                  </LegacyStack>
                </LegacyStack>
              </div>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
      <div className="container">
        <Page fullWidth>
          <Layout>
            <Layout.Section secondary>
              <LegacyStack spacing="tight">
                <Button size="medium" icon={MobileChevronMajor}></Button>
                <div style={{ padding: "5px" }}>
                  <Text variant="headingLg" as="h4">
                    Icon Blocks
                  </Text>
                </div>
              </LegacyStack>
              <br />
              <LegacyStack distribution="equalSpacing">
                <Button size="large">Blocks</Button>
                <Button size="large">Icons</Button>

                <Button pressed={true} size="large">
                  Style
                </Button>
              </LegacyStack>
              <br />
              <LegacyCard sectioned>
                <Text variant="headingLg" as="h4">
                  ICON SIZE
                </Text>
                <br />
                <LegacyStack>
                  <LegacyStack.Item fill>
                    <div style={{ width: "80%" }}>
                      <RangeSlider
                        value={iconRangeValue}
                        onChange={setIconRangeValue}
                        min={0}
                        max={360}
                      />
                    </div>
                  </LegacyStack.Item>
                  <LegacyStack.Item>
                    <div className="textfield">
                      <TextField
                        value={iconRangeValue}
                        onChange={setIconRangeValue}
                        suffix="px"
                        autoComplete="on"
                        type="number"
                      />
                    </div>
                  </LegacyStack.Item>
                </LegacyStack>
              </LegacyCard>
              {/* Colors  */}
              <LegacyCard sectioned>
                <Text variant="headingLg" as="h4">
                  COLORS
                </Text>
                <br />

                <div style={{ padding: "5px" }}>
                  <LegacyStack distribution="equalSpacing">
                    <LegacyStack>
                      <Text variant="headingSm">
                        Background <br /> Color
                      </Text>

                      <div style={{ width: "190px" }}>
                        <TextField
                          prefix={backgroundColor}
                          type="text"
                          value={colorBackground}
                          onChange={setColorBackground}
                        />
                      </div>
                    </LegacyStack>
                    <LegacyStack>
                      <Text variant="headingSm">Title Color</Text>
                      <br />
                      <div style={{ width: "190px" }}>
                        <TextField
                          prefix={TitleColor}
                          type="text"
                          value={colorTitle}
                          onChange={setColorTitle}
                        />
                      </div>
                    </LegacyStack>
                  </LegacyStack>
                  <div style={{ marginTop: "45px" }}>
                    <LegacyStack distribution="equalSpacing">
                      <LegacyStack>
                        <Text variant="headingSm">
                          Background <br /> Color{" "}
                        </Text>

                        <div style={{ width: "190px" }}>
                          <TextField
                            prefix={IconColor}
                            type="text"
                            value={colorIcon}
                            onChange={setColorIcon}
                          />
                        </div>
                      </LegacyStack>
                      <LegacyStack>
                        <Text variant="headingSm">Title Color</Text>
                        <br />
                        <div style={{ width: "190px" }}>
                          <TextField
                            prefix={SubtitleColor}
                            type="text"
                            value={colorSubtitle}
                            onChange={setColorSubtitle}
                          />
                        </div>
                      </LegacyStack>
                    </LegacyStack>
                  </div>
                </div>
              </LegacyCard>
              <LegacyCard sectioned>
                <Text variant="headingLg" as="h4">
                  Typography
                </Text>
                <br />

                <div style={{ padding: "5px" }}>
                  <LegacyStack distribution="equalSpacing">
                    <LegacyStack>
                      <div>
                        <TextField
                          label="Title Font Size"
                          type="number"
                          value={titleFont}
                          onChange={setTitleFont}
                          suffix="px"
                        />
                      </div>
                    </LegacyStack>
                    <LegacyStack>
                      <div style={{ width: "230px" }}>
                        <Select
                          label="Title Font Style"
                          options={["Regular", "Bold"]}
                          value={RegularFont}
                          onChange={setRegularFont}
                        />
                      </div>
                    </LegacyStack>
                  </LegacyStack>
                  <div style={{ marginTop: "45px" }}>
                    <LegacyStack distribution="equalSpacing">
                      <LegacyStack>
                        <div>
                          <TextField
                            label="Subtitle Font Size"
                            type="number"
                            value={subtitleFont}
                            onChange={setSubtitleFont}
                            suffix="px"
                          />
                        </div>
                      </LegacyStack>
                      <LegacyStack>
                        <div style={{ width: "230px" }}>
                          <Select
                            label="Subtitle Font Style"
                            options={["Bold", "Regular"]}
                            value={BoldFont}
                            onChange={setBoldFont}
                          />
                        </div>
                      </LegacyStack>
                    </LegacyStack>
                  </div>
                </div>
              </LegacyCard>
              <LegacyCard sectioned>
                <Text variant="headingLg" as="h4">
                  Spacing
                </Text>
                <br />
                <div style={{ padding: "5px" }}>
                  <Text fontWeight="bold">Block Size</Text>
                  <br />
                  <LegacyStack>
                    <LegacyStack.Item fill>
                      <div style={{ width: "80%" }}>
                        <RangeSlider
                          value={blockRangeValue}
                          onChange={setBlockRangeValue}
                          min={0}
                          max={360}
                        />
                      </div>
                    </LegacyStack.Item>
                    <LegacyStack.Item>
                      <div className="textfield">
                        <TextField
                          value={blockRangeValue}
                          onChange={setBlockRangeValue}
                          suffix="px"
                          autoComplete="on"
                          type="number"
                        />
                      </div>
                    </LegacyStack.Item>
                  </LegacyStack>
                  <div style={{}}>
                    <Text variant="headingLg" as="h4">
                      Border Location
                    </Text>
                    <br />
                    <LegacyStack distribution="equalSpacing">
                      <LegacyStack>
                        <div>
                          <TextField
                            label="Goes up"
                            type="number"
                            value={Goesup}
                            onChange={setGoesup}
                            suffix="px"
                          />
                        </div>
                      </LegacyStack>
                      <LegacyStack>
                        <div style={{ width: "230px" }}>
                          <TextField
                            label="Goes down"
                            type="number"
                            value={GoesDown}
                            suffix="px"
                            onChange={setGoesDown}
                          />
                        </div>
                      </LegacyStack>
                    </LegacyStack>
                    <div style={{ marginTop: "20px" }}>
                      <Text fontWeight="bold">Block Size</Text>
                      <br />
                      <LegacyStack>
                        <LegacyStack.Item fill>
                          <div style={{ width: "80%" }}>
                            <RangeSlider
                              value={spaceBetweenRangeValue}
                              onChange={setspaceBetweenRangeValue}
                              min={0}
                              max={360}
                            />
                          </div>
                        </LegacyStack.Item>
                        <LegacyStack.Item>
                          <div className="textfield">
                            <TextField
                              value={spaceBetweenRangeValue}
                              onChange={setspaceBetweenRangeValue}
                              suffix="px"
                              autoComplete="on"
                              type="number"
                            />
                          </div>
                        </LegacyStack.Item>
                      </LegacyStack>
                    </div>
                  </div>
                </div>
              </LegacyCard>
              <div style={{ marginTop: "15px" }}>
                <ButtonGroup>
                  <Button onClick={toggleActive} primary>
                    Save
                  </Button>
                  <Button destructive>Delete</Button>
                </ButtonGroup>
                {toastMarkup}
              </div>
            </Layout.Section>
            <Layout.Section secondary>
              <LegacyCard title="Tags" sectioned>
                <p>Add tags to your order.</p>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </Page>
      </div>
    </div>
  );
};

export default TrustIconIconito;
