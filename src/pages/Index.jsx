// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Container, Flex, Heading, Image, Progress, Stack, Text, VStack } from "@chakra-ui/react";
import { FaPlus, FaEdit, FaEye } from "react-icons/fa";

const Index = () => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      title: "Project Alpha",
      description: "Redesign of the client's main e-commerce website.",
      progress: 75,
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXNpZ258ZW58MHx8fHwxNzE0MzM0NjIyfDA&ixlib=rb-4.0.3&q=80&w=1080",
      updates: [
        { date: "2023-01-10", content: "Completed homepage layout." },
        { date: "2023-02-15", content: "Added product listing page with filters." },
        { date: "2023-03-05", content: "Finalized checkout process." },
      ],
    },
    {
      id: 2,
      title: "Project Beta",
      description: "Development of a new mobile application.",
      progress: 50,
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwwfHx8fDE3MTQzMzQ2MjJ8MA&ixlib=rb-4.0.3&q=80&w=1080",
      updates: [
        { date: "2023-01-20", content: "Setup project and completed login screen." },
        { date: "2023-02-25", content: "Implemented notifications and settings." },
      ],
    },
  ];

  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" my={6}>
        Project Progress Dashboard
      </Heading>
      <Stack spacing={8}>
        {projects.map((project) => (
          <Box key={project.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <Flex justifyContent="space-between" alignItems="center">
              <Heading as="h2" size="lg">
                {project.title}
              </Heading>
              <Button leftIcon={<FaEdit />} colorScheme="blue">
                Edit
              </Button>
            </Flex>
            <Text mt={4}>{project.description}</Text>
            <Image src={project.image} alt={`Image for ${project.title}`} mt={4} />
            <Progress colorScheme="green" size="lg" value={project.progress} mt={4} />
            <VStack align="stretch" mt={4}>
              {project.updates.map((update, index) => (
                <Box key={index} p={4} bg="gray.100" borderRadius="md">
                  <Text fontWeight="bold">{update.date}</Text>
                  <Text>{update.content}</Text>
                </Box>
              ))}
            </VStack>
          </Box>
        ))}
      </Stack>
      <Flex justifyContent="center" mt={10}>
        <Button leftIcon={<FaPlus />} colorScheme="teal" size="lg">
          Add New Project
        </Button>
      </Flex>
    </Container>
  );
};

export default Index;
