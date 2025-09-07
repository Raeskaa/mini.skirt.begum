'use client';

import { 
  Heading, 
  Text, 
  Label, 
  Link, 
  Button,
  PrimaryButton,
  SecondaryButton,
  OutlineButton,
  Input,
  EmailInput,
  Container,
  Section,
  ContentSection
} from '@/components/ui';

export default function TypographyDemo() {
  return (
    <main className="bg-white pt-24">
      <Section padding="lg">
        <Container maxWidth="2xl">
          <div className="space-y-12">
            {/* Typography Showcase */}
            <div className="space-y-8">
              <Heading level={1}>Typography System Demo</Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading level={2}>Headings</Heading>
                  <div className="space-y-4 mt-4">
                    <Heading level={1}>Heading 1 - Main Titles</Heading>
                    <Heading level={2}>Heading 2 - Section Titles</Heading>
                    <Heading level={3}>Heading 3 - Subsection Titles</Heading>
                    <Heading level={4}>Heading 4 - Card Titles</Heading>
                  </div>
                </div>

                <div>
                  <Heading level={2}>Body Text</Heading>
                  <div className="space-y-4 mt-4">
                    <Text variant="large">
                      Large text - Used for important descriptions and introductory content. 
                      This size provides good readability while maintaining visual hierarchy.
                    </Text>
                    <Text variant="body">
                      Body text - Standard paragraph text used throughout the website. 
                      This is the default size for most content and provides optimal readability.
                    </Text>
                    <Text variant="small">
                      Small text - Used for captions, metadata, and secondary information. 
                      Perfect for tags, timestamps, and supplementary details.
                    </Text>
                    <Text variant="caption">
                      Caption text - The smallest text size for fine print, 
                      disclaimers, and very secondary information.
                    </Text>
                  </div>
                </div>

                <div>
                  <Heading level={2}>Labels & Links</Heading>
                  <div className="space-y-4 mt-4">
                    <Label>Form Label</Label>
                    <div>
                      <Link href="#" underline>Underlined Link</Link>
                    </div>
                    <div>
                      <Link href="#">Regular Link</Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Button Showcase */}
            <div className="space-y-8">
              <Heading level={2}>Button Components</Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading level={3}>Button Variants</Heading>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <SecondaryButton>Secondary Button</SecondaryButton>
                    <OutlineButton>Outline Button</OutlineButton>
                    <Button variant="ghost">Ghost Button</Button>
                  </div>
                </div>

                <div>
                  <Heading level={3}>Button Sizes</Heading>
                  <div className="flex flex-wrap items-center gap-4 mt-4">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                  </div>
                </div>

                <div>
                  <Heading level={3}>Button States</Heading>
                  <div className="flex flex-wrap gap-4 mt-4">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button fullWidth>Full Width</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Showcase */}
            <div className="space-y-8">
              <Heading level={2}>Form Components</Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading level={3}>Input Fields</Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <Input
                      label="Text Input"
                      placeholder="Enter your name"
                      value=""
                      onChange={() => {}}
                    />
                    <EmailInput
                      label="Email Input"
                      placeholder="Enter your email"
                      value=""
                      onChange={() => {}}
                    />
                    <Input
                      label="Required Field"
                      placeholder="This field is required"
                      value=""
                      onChange={() => {}}
                      required
                    />
                    <Input
                      label="Error State"
                      placeholder="This field has an error"
                      value=""
                      onChange={() => {}}
                      error="This field is required"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Showcase */}
            <div className="space-y-8">
              <Heading level={2}>Layout Components</Heading>
              
              <div className="space-y-6">
                <div>
                  <Heading level={3}>Container Sizes</Heading>
                  <div className="space-y-4 mt-4">
                    <div className="bg-gray-100 p-4 rounded">
                      <Text variant="small" color="gray-600">Container: Small (max-w-2xl)</Text>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <Text variant="small" color="gray-600">Container: Medium (max-w-4xl)</Text>
                    </div>
                    <div className="bg-gray-100 p-4 rounded">
                      <Text variant="small" color="gray-600">Container: Large (max-w-6xl)</Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Showcase */}
            <div className="space-y-8">
              <Heading level={2}>Color Variations</Heading>
              
              <div className="space-y-4">
                <Text color="black">Black Text</Text>
                <Text color="gray-700">Gray 700 Text</Text>
                <Text color="gray-600">Gray 600 Text</Text>
                <Text color="gray-500">Gray 500 Text</Text>
                <Text color="gray-400">Gray 400 Text</Text>
              </div>
            </div>

            {/* Responsive Demo */}
            <div className="space-y-8">
              <Heading level={2}>Responsive Typography</Heading>
              <Text variant="body">
                This typography system is built with mobile-first responsive design. 
                Text sizes automatically adjust based on screen size for optimal readability 
                across all devices.
              </Text>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
