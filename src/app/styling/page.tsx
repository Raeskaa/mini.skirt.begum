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
  GhostButton,
  DangerButton,
  SuccessButton,
  WarningButton,
  Input,
  EmailInput,
  PasswordInput,
  SearchInput,
  TextareaInput,
  NumberInput,
  TelInput,
  Container,
  Section,
  ContentSection
} from '@/components/ui';

export default function StylingPage() {
  return (
    <main className="bg-white pt-24">
      <Section padding="lg">
        <Container maxWidth="2xl">
          <div className="space-y-16">
            {/* Page Header */}
            <div className="text-center space-y-4">
              <Heading level={1}>Design System</Heading>
              <Text variant="large" color="gray-600">
                Complete showcase of typography, components, and styling guidelines
              </Text>
            </div>

            {/* Typography Section */}
            <div className="space-y-8">
              <Heading level={2}>Typography</Heading>
              
              <div className="space-y-8">
                {/* Headings */}
                <div className="space-y-6">
                  <Heading level={3}>Headings</Heading>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-900 pl-4">
                      <Heading level={1}>Heading 1 - Main Titles</Heading>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Tiempos, 60px, 400 weight - Used for page titles and hero sections
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Heading level={2}>Heading 2 - Section Titles</Heading>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Tiempos, 48px, 400 weight - Used for major section headings
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Heading level={3}>Heading 3 - Subsection Titles</Heading>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 30px, 600 weight - Used for subsection headings
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Heading level={4}>Heading 4 - Card Titles</Heading>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 20px, 500 weight - Used for card and component titles
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Body Text */}
                <div className="space-y-6">
                  <Heading level={3}>Body Text</Heading>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Text variant="large">
                        Large text - Used for important descriptions and introductory content. 
                        This size provides good readability while maintaining visual hierarchy.
                      </Text>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 18px, 400 weight, 1.6 line height
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Text variant="body">
                        Body text - Standard paragraph text used throughout the website. 
                        This is the default size for most content and provides optimal readability.
                      </Text>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 16px, 400 weight, 1.4 line height
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Text variant="small">
                        Small text - Used for captions, metadata, and secondary information. 
                        Perfect for tags, timestamps, and supplementary details.
                      </Text>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 14px, 400 weight, 1.4 line height
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Text variant="caption">
                        Caption text - The smallest text size for fine print, 
                        disclaimers, and very secondary information.
                      </Text>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 12px, 400 weight, 1.4 line height
                      </Text>
                    </div>
                  </div>
                </div>

                {/* Labels & Links */}
                <div className="space-y-6">
                  <Heading level={3}>Labels & Links</Heading>
                  <div className="space-y-4">
                    <div className="border-l-4 border-gray-300 pl-4">
                      <Label>Form Label</Label>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 14px, 500 weight, uppercase, letter-spacing
                      </Text>
                    </div>
                    <div className="border-l-4 border-gray-300 pl-4 space-y-2">
                      <Link href="#" underline>Underlined Link</Link>
                      <br />
                      <Link href="#">Regular Link</Link>
                      <Text variant="small" color="gray-500" className="mt-2">
                        Inter, 16px, 400 weight with hover states
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Color Palette */}
            <div className="space-y-8">
              <Heading level={2}>Color Palette</Heading>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <div className="w-full h-16 bg-black rounded-lg"></div>
                  <Text variant="small" weight="medium">Black</Text>
                  <Text variant="caption" color="gray-500">#000000</Text>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-gray-700 rounded-lg"></div>
                  <Text variant="small" weight="medium">Gray 700</Text>
                  <Text variant="caption" color="gray-500">#333333</Text>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-gray-600 rounded-lg"></div>
                  <Text variant="small" weight="medium">Gray 600</Text>
                  <Text variant="caption" color="gray-500">#666666</Text>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-gray-500 rounded-lg"></div>
                  <Text variant="small" weight="medium">Gray 500</Text>
                  <Text variant="caption" color="gray-500">#888888</Text>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-gray-400 rounded-lg"></div>
                  <Text variant="small" weight="medium">Gray 400</Text>
                  <Text variant="caption" color="gray-500">#aaaaaa</Text>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-gray-100 rounded-lg"></div>
                  <Text variant="small" weight="medium">Gray 100</Text>
                  <Text variant="caption" color="gray-500">#f5f5f5</Text>
                </div>
                <div className="space-y-2">
                  <div className="w-full h-16 bg-white border border-gray-200 rounded-lg"></div>
                  <Text variant="small" weight="medium">White</Text>
                  <Text variant="caption" color="gray-500">#ffffff</Text>
                </div>
              </div>
            </div>

            {/* Button Components */}
            <div className="space-y-8">
              <Heading level={2}>Button Components</Heading>
              
              <div className="space-y-8">
                {/* Button Variants */}
                <div className="space-y-6">
                  <Heading level={3}>Button Variants</Heading>
                  <div className="flex flex-wrap gap-4">
                    <PrimaryButton>Primary Button</PrimaryButton>
                    <SecondaryButton>Secondary Button</SecondaryButton>
                    <OutlineButton>Outline Button</OutlineButton>
                    <GhostButton>Ghost Button</GhostButton>
                    <DangerButton>Danger Button</DangerButton>
                    <SuccessButton>Success Button</SuccessButton>
                    <WarningButton>Warning Button</WarningButton>
                  </div>
                  <Text variant="small" color="gray-500">
                    All buttons include hover states, focus indicators, and smooth transitions
                  </Text>
                </div>

                {/* Button Sizes */}
                <div className="space-y-6">
                  <Heading level={3}>Button Sizes</Heading>
                  <div className="flex flex-wrap items-center gap-4">
                    <Button size="xs">Extra Small</Button>
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                    <Button size="xl">Extra Large</Button>
                  </div>
                  <Text variant="small" color="gray-500">
                    XS: 24px, S: 32px, M: 44px, L: 56px, XL: 68px height
                  </Text>
                </div>

                {/* Button States */}
                <div className="space-y-6">
                  <Heading level={3}>Button States</Heading>
                  <div className="flex flex-wrap gap-4">
                    <Button>Normal</Button>
                    <Button disabled>Disabled</Button>
                    <Button loading>Loading</Button>
                    <Button fullWidth>Full Width</Button>
                  </div>
                  <Text variant="small" color="gray-500">
                    Includes normal, hover, focus, disabled, and loading states
                  </Text>
                </div>
              </div>
            </div>

            {/* Form Components */}
            <div className="space-y-8">
              <Heading level={2}>Form Components</Heading>
              
                <div className="space-y-6">
                  <Heading level={3}>Input Fields</Heading>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    <PasswordInput
                      label="Password Input"
                      placeholder="Enter your password"
                      value=""
                      onChange={() => {}}
                    />
                    <SearchInput
                      label="Search Input"
                      placeholder="Search..."
                      value=""
                      onChange={() => {}}
                    />
                    <NumberInput
                      label="Number Input"
                      placeholder="Enter a number"
                      value=""
                      onChange={() => {}}
                    />
                    <TelInput
                      label="Phone Input"
                      placeholder="Enter your phone"
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
                    <Input
                      label="Success State"
                      placeholder="This field is valid"
                      value="Valid input"
                      onChange={() => {}}
                      success="Looks good!"
                    />
                    <Input
                      label="Helper Text"
                      placeholder="With helper text"
                      value=""
                      onChange={() => {}}
                      helperText="This is helpful information"
                    />
                  </div>
                  <div className="mt-6">
                    <TextareaInput
                      label="Textarea Input"
                      placeholder="Enter your message"
                      value=""
                      onChange={() => {}}
                      rows={4}
                      maxLength={500}
                    />
                  </div>
                  <Text variant="small" color="gray-500">
                    All inputs include labels, focus states, error handling, validation states, and accessibility features
                  </Text>
                </div>
            </div>

            {/* Layout Components */}
            <div className="space-y-8">
              <Heading level={2}>Layout Components</Heading>
              
              <div className="space-y-6">
                <Heading level={3}>Container Sizes</Heading>
                <div className="space-y-4">
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Text variant="small" color="gray-600">Container: Small (max-w-2xl) - 672px</Text>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Text variant="small" color="gray-600">Container: Medium (max-w-4xl) - 896px</Text>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Text variant="small" color="gray-600">Container: Large (max-w-6xl) - 1152px</Text>
                  </div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <Text variant="small" color="gray-600">Container: Extra Large (max-w-7xl) - 1280px</Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsive Design */}
            <div className="space-y-8">
              <Heading level={2}>Responsive Design</Heading>
              
              <div className="space-y-6">
                <Text variant="body">
                  This design system is built with a mobile-first approach, ensuring optimal 
                  readability and usability across all device sizes.
                </Text>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-gray-900 rounded-full mx-auto mb-3"></div>
                    <Heading level={4}>Mobile First</Heading>
                    <Text variant="small" color="gray-600">
                      Base styles optimized for mobile devices (320px+)
                    </Text>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-gray-900 rounded-full mx-auto mb-3"></div>
                    <Heading level={4}>Progressive Enhancement</Heading>
                    <Text variant="small" color="gray-600">
                      Enhanced styles for tablet (768px+) and desktop (1024px+)
                    </Text>
                  </div>
                  <div className="text-center p-4 border border-gray-200 rounded-lg">
                    <div className="w-12 h-12 bg-gray-900 rounded-full mx-auto mb-3"></div>
                    <Heading level={4}>Touch Friendly</Heading>
                    <Text variant="small" color="gray-600">
                      Minimum 44px touch targets for optimal mobile interaction
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility */}
            <div className="space-y-8">
              <Heading level={2}>Accessibility Features</Heading>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <Heading level={4}>Keyboard Navigation</Heading>
                    <Text variant="small">
                      All interactive elements are keyboard accessible with proper focus indicators
                    </Text>
                  </div>
                  <div className="space-y-4">
                    <Heading level={4}>Screen Reader Support</Heading>
                    <Text variant="small">
                      Semantic HTML structure and proper ARIA labels for screen readers
                    </Text>
                  </div>
                  <div className="space-y-4">
                    <Heading level={4}>Color Contrast</Heading>
                    <Text variant="small">
                      All text meets WCAG AA contrast ratio requirements (4.5:1)
                    </Text>
                  </div>
                  <div className="space-y-4">
                    <Heading level={4}>Focus Management</Heading>
                    <Text variant="small">
                      Clear focus indicators and logical tab order throughout the interface
                    </Text>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guidelines */}
            <div className="space-y-8">
              <Heading level={2}>Usage Guidelines</Heading>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heading level={4} className="mb-4">Typography Hierarchy</Heading>
                  <ul className="space-y-2 text-sm">
                    <li>• Use Heading 1 only once per page for the main title</li>
                    <li>• Use Heading 2 for major section divisions</li>
                    <li>• Use Heading 3 for subsections within major sections</li>
                    <li>• Use Heading 4 for card titles and component headings</li>
                    <li>• Maintain consistent spacing between heading levels</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg">
                  <Heading level={4} className="mb-4">Component Usage</Heading>
                  <ul className="space-y-2 text-sm">
                    <li>• Use Primary buttons for main actions and CTAs</li>
                    <li>• Use Secondary buttons for secondary actions</li>
                    <li>• Use Outline buttons for less prominent actions</li>
                    <li>• Use Ghost buttons for subtle actions or in navigation</li>
                    <li>• Always provide clear labels for form inputs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
