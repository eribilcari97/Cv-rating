import {
  Box,
  Button,
  Container,
  Heading,
  Textarea,
  VStack,
  Text
} from "@chakra-ui/react";
import { useState } from "react";

export default function InputPage({ setResult }) {
  const [cvText, setCvText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/ai/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ cvText })
    });

    const data = await res.json();
    setResult(data);
    setLoading(false);
  };

  return (
    <Container maxW="container.md" py={20}>
      <VStack spacing={6}>
        <Heading size="lg">AI CV Analyzer</Heading>
        <Text color="gray.500">
          Paste your CV below and get instant feedback
        </Text>

        <Textarea
          placeholder="Paste your CV here..."
          value={cvText}
          onChange={(e) => setCvText(e.target.value)}
          rows={12}
          bg="gray.50"
        />

        <Button
          colorScheme="blue"
          size="lg"
          width="full"
          onClick={handleAnalyze}
          isLoading={loading}
        >
          Analyze CV
        </Button>
      </VStack>
    </Container>
  );
}