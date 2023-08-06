import { Box, Title,Text } from "@mantine/core"
import { tasks } from "../data/tasks"

const Task = () => {
    return (
        <div
            className=""
        >
            <h1 className="text-5xl font-semibold">
                Tasks
            </h1>
            <div className="space-y-4">
                {tasks.map(task=>(
                    <Box className="border px-20 py-8">
                        <Title>{task.title}</Title>
                        <Text>{task.description}</Text>
                    </Box>
                ))}
            </div>
        </div>
    )
}

export default Task