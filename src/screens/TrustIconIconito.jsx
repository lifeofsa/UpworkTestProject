import React, { useCallback, useState } from "react";
import {
  Page,
  Layout,
  LegacyCard,
  Icon,
  AlphaStack,
  LegacyStack,
  Text,
  Button,
  Heading,
  Box,
  Divider,
  RangeSlider,
  TextField,
  ColorPicker,
} from "@shopify/polaris";
import {
  CircleAlertMajor,
  ChecklistAlternateMajor,
  MobileChevronMajor,
} from "@shopify/polaris-icons";
import trustbadge from "../assets/iconito.png";
import { border } from "@shopify/polaris-tokens";
const TrustIconIconito = () => {
  const [rangeValue, setRangeValue] = useState(50);
  const [colorBackground, setColorBackground] = useState("#ffffff");
  const [colorTitle, setColorTitle] = useState("#000000");
  const [colorIcon, setColorIcon] = useState("#000000");
  const [colorSubtitle, setColorSubtitle] = useState("#000000");
  const handleRangeSliderChange = useCallback(
    (value) => setRangeValue(value),
    []
  );
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
                      <Button monochrome outline>
                        <Text fontWeight="bold">Integrations</Text>
                      </Button>
                    </div>
                    <div style={{ color: "#0a83ed" }}>
                      <Button icon={CircleAlertMajor} monochrome outline>
                        <Text fontWeight="bold">Help Center</Text>
                      </Button>
                    </div>
                  </LegacyStack>

                  {/* <Text fontWeight="bold">Iconito - Trust Badges & Icons</Text> */}
                </LegacyStack>
              </div>
            </LegacyCard>
          </Layout.Section>
        </Layout>
      </Page>
      <div className="container">
        <Page
          // breadcrumbs={{
          //   content: "",
          //   url: "#",
          // }}
          // title="Icons Blocks"
          fullWidth
        >
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
                    <RangeSlider
                      value={rangeValue}
                      onChange={handleRangeSliderChange}
                      min={0}
                      max={360}
                    />
                  </LegacyStack.Item>
                  <LegacyStack.Item>
                    <div className="textfield">
                      <TextField
                        value={rangeValue}
                        onChange={handleRangeSliderChange}
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
                          // connectedLeft={backgroundColor}
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
                          // connectedLeft={backgroundColor}
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
                            // connectedLeft={backgroundColor}
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
                            // connectedLeft={backgroundColor}
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
