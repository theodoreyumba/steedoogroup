// src/components/disclaimer/disclaimer.tsx
'use client';
import { useState } from 'react';
import { Alert, Text, Button, Group } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';

export default function Disclaimer() {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  return (
    <Alert
      icon={<IconAlertCircle size={32} />}
      title="Important Legal Disclaimer"
      color="red"
      radius="xl"
      closeButtonLabel="Close alert"
      onClose={() => setVisible(false)}
      style={{ position: 'fixed', backgroundColor: 'var(--mantine-color-pink-filled)', top: 0, left: 0, width: '100%', zIndex: 1000 }}
    >
      <Text size="md" fw={500}>
        <strong>Please read this legal disclaimer carefully before using this website.</strong>
        <br /><br />
        <strong>Under Construction:</strong> This website is currently under construction. The content provided is for informational purposes only and may include inaccuracies, simulations, or placeholders used for testing purposes.
        <br /><br />
        <strong>No Warranties:</strong> Steedoo Group makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the website or the information contained on the website for any purpose. Any reliance you place on such information is strictly at your own risk.
        <br /><br />
        <strong>Limitation of Liability:</strong> In no event shall Steedoo Group, its directors, employees, or affiliates be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your access to, use of, or inability to use this website, including but not limited to any errors or omissions in the content.
        <br /><br />
        <strong>Legal Compliance:</strong> By accessing this website, you agree to comply with all applicable local, state, national, and international laws and regulations, including but not limited to the U.S. Digital Millennium Copyright Act (DMCA) and the Communications Decency Act.
        <br /><br />
        <strong>Intellectual Property:</strong> Unauthorized use or reproduction of the material on this website may violate intellectual property laws, including but not limited to copyright and trademark laws under Title 17 of the United States Code.
        <br /><br />
        <strong>External Links:</strong> This website may contain links to external websites that are not provided or maintained by Steedoo Group. Please note that Steedoo Group does not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
        <br /><br />
        <strong>International Users:</strong> Accessing this website from territories where its content is illegal is prohibited. If you access this website from outside the United States, you do so at your own risk and are responsible for compliance with your local laws.
        <br /><br />
        <strong>Governing Law:</strong> This disclaimer and your use of the website are governed by the laws of the State of Wyoming and applicable federal laws of the United States, without regard to conflicts of law principles.
        <br /><br />
        <strong>Acceptance:</strong> By clicking "Accept" or continuing to use this website, you acknowledge that you have read, understood, and agree to be bound by this disclaimer.
      </Text>
      <Group justify="right" mt="md">
        <Button color="red" onClick={() => setVisible(false)}>
          Accept
        </Button>
      </Group>
    </Alert>
  );
}
