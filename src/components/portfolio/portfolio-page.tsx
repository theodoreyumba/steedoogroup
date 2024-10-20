import React from 'react';
import { Title, Text, Container, Grid, Card, Image, Group, Badge, List, ThemeIcon, Button, Anchor, Timeline, Tabs, Paper, Accordion, SimpleGrid, Box, BackgroundImage, Progress, Table, Avatar, Blockquote, Divider, Center, RingProgress, Spoiler } from "@mantine/core";
import { IconTruck, IconCreditCard, IconShirt, IconBuilding, IconCheck, IconChartLine, IconAward, IconUsers, IconGlobe, IconLeaf, IconBrandTwitter, IconBrandLinkedin, IconMail, IconPhone, IconMapPin, IconBriefcase, IconBook, IconRocket, IconHeartHandshake, IconPlant, IconChartPie, IconCoins, IconBuildingSkyscraper, IconSearch, IconClipboardCheck, IconPresentationAnalytics, IconCircleCheck, IconQuote } from '@tabler/icons-react';


interface CompanyStats {
  [key: string]: string;
}

interface Company {
  name: string;
  logo: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  details: string[];
  stats: CompanyStats;
}

const companies: Company[] = [
  {
    name: "Dereva",
    logo: "/images/dereva-logo.png",
    description: "A cutting-edge logistics company revolutionizing supply chain management across Africa.",
    icon: <IconTruck size={24} />,
    color: "blue",
    details: [
      "Fleet of over 500 vehicles",
      "AI-powered route optimization",
      "Real-time tracking and analytics",
      "Sustainable practices reducing carbon footprint by 30%"
    ],
    stats: {
      revenue: "$50M",
      employees: "1,000+",
      countries: "12"
    }
  },
  {
    name: "Juniaboss",
    logo: "/images/juniaboss-logo.png",
    description: "A next-generation fintech bank combining the best features of Revolut and Ramp.",
    icon: <IconCreditCard size={24} />,
    color: "green",
    details: [
      "Mobile-first banking platform",
      "Advanced expense management for businesses",
      "Seamless multi-currency support",
      "Integrated investment and crypto trading"
    ],
    stats: {
      users: "2.5M",
      transactions: "$1B monthly",
      businessAccounts: "50,000+"
    }
  },
  {
    name: "Ogun",
    logo: "/images/ogun-logo.png",
    description: "A luxury clothing brand celebrating African heritage with modern, sustainable fashion.",
    icon: <IconShirt size={24} />,
    color: "yellow",
    details: [
      "Ethically sourced materials",
      "Collaborations with renowned African designers",
      "Featured in Vogue and GQ",
      "Carbon-neutral production process"
    ],
    stats: {
      stores: "25",
      onlineRevenue: "$30M annually",
      sustainabilityScore: "95/100"
    }
  },
  {
    name: "Steedoo",
    logo: "/images/steedoo-logo.png",
    description: "A diversified retail and real estate company shaping the future of urban living and commerce.",
    icon: <IconBuilding size={24} />,
    color: "red",
    details: [
      "Smart city development projects",
      "Innovative mixed-use properties",
      "E-commerce platform with 10M+ monthly visitors",
      "Green building initiatives reducing energy consumption by 40%"
    ],
    stats: {
      propertyPortfolio: "$2B",
      annualRetailSales: "$500M",
      employeesWorldwide: "5,000+"
    }
  }
];

const CompanyCard: React.FC<{ company: Company }> = ({ company }) => (
  <Card shadow="sm" padding="lg" radius="md" withBorder>
    <Card.Section>
      <Image
        src={company.logo}
        height={160}
        alt={`${company.name} logo`}
      />
    </Card.Section>

    <Group justify="space-between" mt="md" mb="xs">
      <Text fw={500}>{company.name}</Text>
      <Badge color={company.color} variant="light">
        {company.icon}
      </Badge>
    </Group>

    <Text size="sm" c="dimmed">
      {company.description}
    </Text>

    <List
      spacing="sm"
      size="sm"
      center
      icon={
        <ThemeIcon color={company.color} size={24} radius="xl">
          <IconCheck size="1rem" />
        </ThemeIcon>
      }
      mt="md"
    >
      {company.details.map((detail, index) => (
        <List.Item key={index}>{detail}</List.Item>
      ))}
    </List>

    <Card mt="md" radius="md" withBorder>
      <Group grow>
        {Object.entries(company.stats).map(([key, value]) => (
          <div key={key} style={{ textAlign: 'center' }}>
            <Text size="lg" fw={500}>{value}</Text>
            <Text size="xs" c="dimmed" tt="uppercase">{key}</Text>
          </div>
        ))}
      </Group>
    </Card>

    <Button variant="light" color={company.color} fullWidth mt="md" radius="md">
      Learn more
    </Button>
  </Card>
);

const PortfolioPage: React.FC = () => {
  return (
    <Container size="xl" py="xl">
      <Box mb={50}>
        <Title order={1} ta="center" size="3rem" fw={700}>Steedoo Group Portfolio</Title>
        <Text size="xl" c="dimmed" ta="center" mt="md" maw={800} mx="auto">
          Discover our diverse portfolio of innovative businesses spanning logistics, fintech, fashion, and real estate. Each company in our portfolio represents a commitment to excellence, innovation, and sustainable growth across Africa and beyond.
        </Text>
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
          {[
            { icon: IconGlobe, label: "Global Presence", value: "15+ Countries" },
            { icon: IconUsers, label: "Total Employees", value: "10,000+" },
            { icon: IconChartLine, label: "Annual Revenue", value: "$1.5B+" },
            { icon: IconLeaf, label: "Sustainability Score", value: "A+" },
          ].map((stat, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <stat.icon size={30} style={{ marginBottom: '0.5rem' }} />
              <Text fw={700}>{stat.value}</Text>
              <Text size="sm" c="dimmed">{stat.label}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Paper>

      <Title order={2} size="2.5rem" fw={600} ta="center" mb="xl">Our Companies</Title>
      <Grid mb={50}>
        {companies.map((company) => (
          <Grid.Col key={company.name} span={{ base: 12, md: 6, lg: 3 }}>
            <CompanyCard company={company} />
          </Grid.Col>
        ))}
      </Grid>

      {companies.map((company, index) => (
        <Paper key={company.name} withBorder shadow="md" p="xl" radius="lg" mb={50}>
          <Title order={2} size="2rem" fw={600} ta="center" mb="xl">{company.name} - In-Depth Analysis</Title>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Image src={company.logo} alt={`${company.name} logo`} fit="contain" height={200} />
              <Text size="lg" mt="md">{company.description}</Text>
              <List
                spacing="sm"
                size="sm"
                icon={
                  <ThemeIcon color={company.color} size={24} radius="xl">
                    <IconCheck size="1rem" />
                  </ThemeIcon>
                }
                mt="md"
              >
                {company.details.map((detail, idx) => (
                  <List.Item key={idx}>{detail}</List.Item>
                ))}
              </List>
            </Grid.Col>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Title order={3} size="1.5rem" mb="md">Key Performance Indicators</Title>
              {Object.entries(company.stats).map(([key, value], idx) => (
                <Box key={idx} mb="md">
                  <Text size="sm" fw={500}>{key}</Text>
                  <Group justify="space-between" mt={5}>
                    <Text size="xl" fw={700}>{value}</Text>
                    <Progress value={Math.random() * 100} size="xl" radius="xl" />
                  </Group>
                </Box>
              ))}
            </Grid.Col>
          </Grid>
          <Divider my="xl" />
          <Title order={3} size="1.5rem" mb="md">Recent Developments</Title>
          <Timeline active={1} bulletSize={24} lineWidth={2}>
            <Timeline.Item bullet={<IconRocket size={12} />} title="Product Launch">
              <Text color="dimmed" size="sm">Launched new AI-powered platform, increasing efficiency by 40%</Text>
              <Text size="xs" mt={4}>1 month ago</Text>
            </Timeline.Item>
            <Timeline.Item bullet={<IconUsers size={12} />} title="Team Expansion">
              <Text color="dimmed" size="sm">Hired 100+ new employees across 5 countries</Text>
              <Text size="xs" mt={4}>3 months ago</Text>
            </Timeline.Item>
            <Timeline.Item bullet={<IconAward size={12} />} title="Industry Recognition">
              <Text color="dimmed" size="sm">Received 'Innovator of the Year' award at Africa Tech Summit</Text>
              <Text size="xs" mt={4}>6 months ago</Text>
            </Timeline.Item>
          </Timeline>
        </Paper>
      ))}

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Portfolio Performance</Title>
        <Tabs defaultValue="overview">
          <Tabs.List grow justify="center" mb="xl">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="financials">Financials</Tabs.Tab>
            <Tabs.Tab value="sustainability">Sustainability</Tabs.Tab>
            <Tabs.Tab value="innovation">Innovation</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <Text size="lg">
              Steedoo Group's portfolio has shown consistent growth and resilience across diverse sectors. Our strategic investments and operational excellence have resulted in strong performance metrics and positive impact across our target markets.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
              {[
                { label: "Portfolio Value", value: "$5.2B" },
                { label: "5-Year CAGR", value: "18.7%" },
                { label: "Companies in Portfolio", value: "12" },
              ].map((metric, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                  <Text fw={700} size="xl">{metric.value}</Text>
                  <Text size="sm" c="dimmed">{metric.label}</Text>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="financials">
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
              {[
                { label: "Revenue Growth", value: "+25% YoY" },
                { label: "EBITDA Margin", value: "18.5%" },
                { label: "Return on Equity", value: "22.3%" },
                { label: "Debt to Equity Ratio", value: "0.8" },
                { label: "Operating Cash Flow", value: "$750M" },
                { label: "Dividend Yield", value: "3.2%" },
              ].map((metric, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                  <Text fw={700} size="xl">{metric.value}</Text>
                  <Text size="sm" c="dimmed">{metric.label}</Text>
                </Card>
              ))}
            </SimpleGrid>
            <Box mt="xl">
              <Title order={3} size="1.5rem" mb="md">Revenue Breakdown</Title>
              <RingProgress
                size={250}
                thickness={30}
                label={
                  <Text size="xl" ta="center" px="xs" fw={700}>
                    Total Revenue
                    <Text fw={400} fz="sm">$1.5B</Text>
                  </Text>
                }
                sections={[
                  { value: 40, color: 'blue', tooltip: 'Fintech - 40%' },
                  { value: 25, color: 'green', tooltip: 'Logistics - 25%' },
                  { value: 20, color: 'orange', tooltip: 'Real Estate - 20%' },
                  { value: 15, color: 'grape', tooltip: 'Fashion - 15%' },
                ]}
              />
            </Box>
          </Tabs.Panel>

          <Tabs.Panel value="sustainability">
            <Text size="lg" mb="md">
              Our commitment to sustainability is reflected in the performance of our portfolio companies:
            </Text>
            <List icon={
              <ThemeIcon color="teal" size={24} radius="xl">
                <IconCheck size="1rem" />
              </ThemeIcon>
            }>
              <List.Item>30% reduction in carbon emissions across our logistics operations</List.Item>
              <List.Item>100% renewable energy use in our tech and fintech divisions</List.Item>
              <List.Item>Sustainable sourcing practices in our fashion and retail segments</List.Item>
              <List.Item>Community development initiatives impacting over 1 million lives</List.Item>
            </List>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
              {[
                { icon: IconLeaf, label: "Carbon Footprint Reduction", value: "-35%" },
                { icon: IconPlant, label: "Trees Planted", value: "500,000+" },
                { icon: IconHeartHandshake, label: "Community Investment", value: "$50M" },
              ].map((stat, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                  <stat.icon size={30} style={{ marginBottom: '0.5rem' }} />
                  <Text fw={700}>{stat.value}</Text>
                  <Text size="sm" c="dimmed">{stat.label}</Text>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>

          <Tabs.Panel value="innovation">
            <Text size="lg" mb="md">
              Innovation is at the core of Steedoo Group's strategy, driving growth and creating value across our portfolio:
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
              {[
                { title: "R&D Investment", value: "$200M annually", description: "Focused on AI, blockchain, and sustainable technologies" },
                { title: "Patents Filed", value: "150+", description: "Across fintech, logistics, and smart city solutions" },
                { title: "Startup Accelerator", value: "30 startups", description: "Nurtured through our innovation hub" },
                { title: "Tech Talent", value: "2,000+ engineers", description: "Driving technological advancements across our portfolio" },
              ].map((item, index) => (
                <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
                  <Text fw={700} size="lg">{item.title}</Text>
                  <Text fw={500} mt="xs">{item.value}</Text>
                  <Text size="sm" c="dimmed" mt="xs">{item.description}</Text>
                </Card>
              ))}
            </SimpleGrid>
          </Tabs.Panel>
        </Tabs>
      </Paper>

      <Box mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Portfolio Timeline</Title>
        <Timeline active={1} bulletSize={24} lineWidth={2}>
          <Timeline.Item bullet={<IconBuilding size={12} />} title="Steedoo Group Founded">
            <Text color="dimmed" size="sm">2021 - Establishment of Steedoo Group as a holding company</Text>
          </Timeline.Item>
          <Timeline.Item bullet={<IconCreditCard size={12} />} title="Acquisition of Juniaboss">
            <Text color="dimmed" size="sm">2022 - Expansion into fintech sector</Text>
          </Timeline.Item>
          <Timeline.Item bullet={<IconTruck size={12} />} title="Launch of Dereva">
            <Text color="dimmed" size="sm">2023 - Entry into logistics and supply chain management</Text>
          </Timeline.Item>
          <Timeline.Item bullet={<IconShirt size={12} />} title="Ogun Brand Introduced">
            <Text color="dimmed" size="sm">2024 - Diversification into sustainable luxury fashion</Text>
          </Timeline.Item>
          <Timeline.Item bullet={<IconBuildingSkyscraper size={12} />} title="Smart City Project Initiated">
            <Text color="dimmed" size="sm">2025 - Began development of first smart city project in East Africa</Text>
          </Timeline.Item>
        </Timeline>
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Investment Strategy</Title>
        <Accordion variant="separated">
          <Accordion.Item value="criteria">
            <Accordion.Control>Investment Criteria</Accordion.Control>
            <Accordion.Panel>
              <Text>We focus on companies that demonstrate:</Text>
              <List>
                <List.Item>Strong growth potential in emerging markets</List.Item>
                <List.Item>Innovative technology or business models</List.Item>
                <List.Item>Commitment to sustainability and social impact</List.Item>
                <List.Item>Experienced management teams</List.Item>
                <List.Item>Scalable business models with potential for regional or global expansion</List.Item>
                <List.Item>Synergies with existing portfolio companies</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="approach">
            <Accordion.Control>Investment Approach</Accordion.Control>
            <Accordion.Panel>
              <Text>Our investment approach includes:</Text>
              <List>
                <List.Item>Active management and operational support</List.Item>
                <List.Item>Long-term value creation focus</List.Item>
                <List.Item>Strategic partnerships and synergies within our portfolio</List.Item>
                <List.Item>Emphasis on digital transformation and innovation</List.Item>
                <List.Item>Tailored capital structures to support growth</List.Item>
                <List.Item>Focus on sustainable business practices and ESG principles</List.Item>
                <List.Item>Leveraging our network to facilitate market entry and expansion</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="sectors">
            <Accordion.Control>Target Sectors</Accordion.Control>
            <Accordion.Panel>
              <Text>We are particularly interested in:</Text>
              <List>
                <List.Item>Fintech and digital financial services</List.Item>
                <List.Item>E-commerce and digital retail</List.Item>
                <List.Item>Sustainable transportation and logistics</List.Item>
                <List.Item>Renewable energy and cleantech</List.Item>
                <List.Item>Health tech and digital healthcare</List.Item>
                <List.Item>Agritech and food security solutions</List.Item>
                <List.Item>Edtech and skills development platforms</List.Item>
                <List.Item>Smart city technologies and urban infrastructure</List.Item>
              </List>
            </Accordion.Panel>
          </Accordion.Item>
          <Accordion.Item value="process">
            <Accordion.Control>Investment Process</Accordion.Control>
            <Accordion.Panel>
              <Timeline active={1} bulletSize={24} lineWidth={2}>
                <Timeline.Item bullet={<IconSearch size={12} />} title="Sourcing and Screening">
                  <Text color="dimmed" size="sm">Identify potential investments through our network and proprietary deal flow</Text>
                </Timeline.Item>
                <Timeline.Item bullet={<IconClipboardCheck size={12} />} title="Due Diligence">
                  <Text color="dimmed" size="sm">Comprehensive analysis of business model, financials, market, and team</Text>
                </Timeline.Item>
                <Timeline.Item bullet={<IconPresentationAnalytics size={12} />} title="Investment Committee">
                  <Text color="dimmed" size="sm">Present findings and recommendations to our investment committee</Text>
                </Timeline.Item>
                <Timeline.Item bullet={<IconHeartHandshake size={12} />} title="Negotiation and Structuring">
                  <Text color="dimmed" size="sm">Agree on terms and structure the investment</Text>
                </Timeline.Item>
                <Timeline.Item bullet={<IconChartLine size={12} />} title="Value Creation and Monitoring">
                  <Text color="dimmed" size="sm">Provide ongoing support and monitor performance post-investment</Text>
                </Timeline.Item>
              </Timeline>
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Paper>

      <Box mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Portfolio Highlights</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {[
            { title: "Market Leader", description: "Juniaboss ranked #1 fintech app in 5 African countries" },
            { title: "Rapid Expansion", description: "Dereva's logistics network grew by 200% in 12 months" },
            { title: "Sustainability Award", description: "Ogun recognized for innovative eco-friendly practices" },
            { title: "Tech Innovation", description: "Steedoo's AI platform reduced operational costs by 35% for clients" },
            { title: "Job Creation", description: "Portfolio companies created over 5,000 new jobs in the past year" },
            { title: "Global Recognition", description: "Featured in Forbes' 'Top 50 Impact Investment Firms'" },
          ].map((highlight, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <ThemeIcon size={40} radius="md" variant="light" color="blue" mb="md">
                <IconAward size={20} />
              </ThemeIcon>
              <Text fw={700} mb="xs">{highlight.title}</Text>
              <Text size="sm">{highlight.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Portfolio Impact</Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Title order={3} size="1.5rem" mb="md">Economic Impact</Title>
            <List icon={<IconChartPie size={16} />} spacing="md">
              <List.Item>Contributed to 2% of GDP growth in operating countries</List.Item>
              <List.Item>Facilitated $500M in cross-border trade through our platforms</List.Item>
              <List.Item>Supported 100,000+ SMEs with access to finance and markets</List.Item>
              <List.Item>Increased financial inclusion, reaching 5M previously unbanked individuals</List.Item>
            </List>
          </div>
          <div>
            <Title order={3} size="1.5rem" mb="md">Social Impact</Title>
            <List icon={<IconUsers size={16} />} spacing="md">
              <List.Item>Created 50,000+ direct and indirect jobs across Africa</List.Item>
              <List.Item>Provided skills training to 100,000+ youth through our education initiatives</List.Item>
              <List.Item>Improved healthcare access for 2M+ people through our health tech investments</List.Item>
              <List.Item>Empowered 500,000+ women entrepreneurs through targeted programs</List.Item>
            </List>
          </div>
        </SimpleGrid>
      </Paper>

      <BackgroundImage src="/api/placeholder/1200/400" radius="lg" mb={50}>
        <Box p="xl" style={{ backgroundColor: 'rgba(0,0,0,0.7)' }}>
          <Title order={2} size="2rem" fw={600} ta="center" c="white" mb="xl">Future Outlook</Title>
          <Text c="white" size="lg" ta="center" maw={800} mx="auto">
            As we look to the future, Steedoo Group is committed to driving innovation, sustainability, and economic growth across Africa. Our vision includes expanding our portfolio into new sectors, fostering technological advancements, and continuing to create value for our stakeholders and communities.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mt="xl">
            {[
              { icon: IconRocket, label: "Expand into 5 new African markets" },
              { icon: IconLeaf, label: "Achieve carbon neutrality across portfolio by 2030" },
              { icon: IconCoins, label: "Launch $500M Africa-focused venture fund" },
            ].map((goal, index) => (
              <Card key={index} padding="lg" radius="md" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                <goal.icon size={30} color="white" style={{ marginBottom: '0.5rem' }} />
                <Text c="white" fw={500}>{goal.label}</Text>
              </Card>
            ))}
          </SimpleGrid>
          <Group justify="center" mt="xl">
            <Button size="lg" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }}>
              Explore Investment Opportunities
            </Button>
          </Group>
        </Box>
      </BackgroundImage>

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Leadership Team</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
          {[
            { name: "Theodore Yumba Mutumba", position: "Founder & President", image: "/images/theodore.jpg", description: "Experienced entrepreneur leading Steedoo's growth across emerging markets." },
            { name: "Kabila Nsungu Prudent", position: "Executive Vice President", image: "/images/prudent.jpg", description: "Operational leader managing the African division." },
            { name: "Kouvas Ilunga Vangeli", position: "Director of Technology", image: "/images/vangeli.jpg", description: "Overseeing technological innovation and infrastructure development." },
            { name: "Kinenkinda Mulume Dan", position: "Director of Finance", image: "/images/dan.jpg", description: "Leading financial operations and investment initiatives." },
            { name: "David Wilson", position: "Chief Investment Officer", image: "/api/placeholder/150/150", description: "Guiding investment strategies and portfolio management." },
            { name: "Sarah Lee", position: "Chief Sustainability Officer", image: "/api/placeholder/150/150", description: "Driving sustainable practices across all operations." },
            { name: "Robert Taylor", position: "Head of Innovation", image: "/api/placeholder/150/150", description: "Spearheading innovative initiatives and R&D projects." },
            { name: "Amanda Garcia", position: "Head of African Operations", image: "/api/placeholder/150/150", description: "Overseeing and expanding operations across the African continent." },
          ].map((member, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src={member.image} height={220} alt={`${member.name} photo`} />
              </Card.Section>
              <Text fw={500} size="lg" mt="md">{member.name}</Text>
              <Text size="sm" c="dimmed" mb="xs">{member.position}</Text>
              <Text size="sm">{member.description}</Text>
            </Card>
          ))}
        </SimpleGrid>
      </Paper>

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Partner Testimonials</Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          {[
            { quote: "Steedoo Group's strategic guidance and network have been instrumental in our rapid growth across African markets.", author: "CEO, TechStart Africa" },
            { quote: "The team's deep understanding of both local and global markets sets them apart as investors and partners.", author: "Founder, GreenEnergy Solutions" },
            { quote: "Working with Steedoo has opened doors to new opportunities and partnerships we couldn't have accessed on our own.", author: "CTO, HealthTech Innovations" },
            { quote: "Their commitment to sustainable development aligns perfectly with our mission, making them ideal long-term partners.", author: "President, EcoFashion Brands" },
          ].map((testimonial, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <Blockquote cite={`- ${testimonial.author}`} icon={<IconQuote size={24} />}>
                {testimonial.quote}
              </Blockquote>
            </Card>
          ))}
        </SimpleGrid>
      </Paper>

      <Box mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Recent News and Insights</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {[
            { title: "Steedoo Group Announces $100M Fund for African Startups", date: "May 15, 2024" },
            { title: "Juniaboss Expands to 3 New Countries in West Africa", date: "April 2, 2024" },
            { title: "Dereva's AI-Powered Logistics Platform Wins Innovation Award", date: "March 18, 2024" },
            { title: "Ogun Partners with Leading Designer for Sustainable Fashion Line", date: "February 25, 2024" },
            { title: "Steedoo Group Hosts Africa Tech Summit 2024", date: "January 10, 2024" },
            { title: "Q4 2023 Financial Results: Record Growth Across Portfolio", date: "December 5, 2023" },
          ].map((news, index) => (
            <Card key={index} shadow="sm" padding="lg" radius="md" withBorder>
              <Text fw={500} mb="xs">{news.title}</Text>
              <Group justify="space-between" mt="md">
                <Text size="sm" c="dimmed">{news.date}</Text>
                <Anchor href="#" size="sm">Read More</Anchor>
              </Group>
            </Card>
          ))}
        </SimpleGrid>
      </Box>

      <Paper withBorder shadow="md" p="xl" radius="lg" mb={50}>
        <Title order={2} size="2rem" fw={600} ta="center" mb="xl">Contact Us</Title>
        <SimpleGrid cols={{ base: 1, md: 2 }} spacing="xl">
          <div>
            <Text size="lg" mb="md">Interested in learning more about our portfolio or exploring investment opportunities? Get in touch with our team.</Text>
            <List icon={<IconCircleCheck size={16} />} spacing="md">
              <List.Item>Detailed portfolio information</List.Item>
              <List.Item>Investment opportunities</List.Item>
              <List.Item>Partnership inquiries</List.Item>
              <List.Item>Media and press relations</List.Item>
            </List>
          </div>
          <div>
            <Group mb="md">
              <IconMail size={24} />
              <Text>info@steedoogroup.com</Text>
            </Group>
            <Group mb="md">
              <IconPhone size={24} />
              <Text>+1 (307) 555-0123</Text>
            </Group>
            <Group mb="md">
              <IconMapPin size={24} />
              <Text>1603 Capitol Avenue, Suite 413A, Cheyenne, WY 82001, USA</Text>
            </Group>
            <Group mt="xl">
              <Button leftSection={<IconBrandLinkedin size={18} />} variant="default">LinkedIn</Button>
              <Button leftSection={<IconBrandTwitter size={18} />} variant="default">Twitter</Button>
            </Group>
          </div>
        </SimpleGrid>
      </Paper>

      <Group justify="center" mt="xl">
        <Anchor href="#" size="lg">Annual Report</Anchor>
        <Anchor href="#" size="lg">Investor Relations</Anchor>
        <Anchor href="#" size="lg">Corporate Governance</Anchor>
        <Anchor href="#" size="lg">Sustainability Report</Anchor>
        <Anchor href="#" size="lg">Careers</Anchor>
      </Group>
    </Container>
  );
}

export default PortfolioPage;