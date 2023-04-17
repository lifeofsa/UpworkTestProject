import React from "react";
import {
  Page,
  Layout,
  LegacyCard,
  Icon,
  AlphaStack,
  LegacyStack,
  Text,
  Button,
} from "@shopify/polaris";
import {
  CircleAlertMajor,
  ChecklistAlternateMajor,
} from "@shopify/polaris-icons";
import trustbadge from "../assets/iconito.png";
const TrustIconIconito = () => {
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
      <Page fullWidth>
        <Layout>
          <Layout.Section secondary>
            <LegacyCard title="Order details" sectioned>
              <p>Use to follow a normal section with a secondary section to</p>
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
  );
};

export default TrustIconIconito;
