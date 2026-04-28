import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Badge,
  SimpleGrid,
  Progress
} from "@chakra-ui/react";

export default function ResultPage({ result }) {
  const { score, strengths, weaknesses, suggestions } = result;

  const getColor = () => {
    if (score > 75) return "green";
    if (score > 50) return "yellow";
    return "red";
  };

  return (
    <Container maxW="container.lg" py={10}>
      <VStack spacing={8} align="stretch">

       
        <Box p={6} borderRadius="xl" bg="white" shadow="md">
          <Heading size="md" mb={4}>
            CV Score
          </Heading>

          <HStack justify="space-between">
            <Text fontSize="3xl" fontWeight="bold">
              {score}/100
            </Text>
            <Badge colorScheme={getColor()} fontSize="md" px={3} py={1}>
              {getColor().toUpperCase()}
            </Badge>
          </HStack>

          <Progress
            value={score}
            colorScheme={getColor()}
            mt={4}
            borderRadius="md"
          />
        </Box>

       
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={6}>

          <Box p={5} bg="green.50" borderRadius="xl">
            <Heading size="sm" mb={3}>Strengths</Heading>
            {strengths.map((s, i) => (
              <Text key={i}>• {s}</Text>
            ))}
          </Box>

        
          <Box p={5} bg="red.50" borderRadius="xl">
            <Heading size="sm" mb={3}>Weaknesses</Heading>
            {weaknesses.map((w, i) => (
              <Text key={i}>• {w}</Text>
            ))}
          </Box>

          
          <Box p={5} bg="blue.50" borderRadius="xl">
            <Heading size="sm" mb={3}>Suggestions</Heading>
            {suggestions.map((s, i) => (
              <Text key={i}>• {s}</Text>
            ))}
          </Box>

        </SimpleGrid>

      </VStack>
    </Container>
  );
}