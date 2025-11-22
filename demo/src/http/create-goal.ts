import { nanoid } from 'nanoid'
import { saveGoal } from './storage'

interface CreateGoalRequest {
  title: string
  desiredWeeklyFrequency: number
}

export async function createGoal({
  title,
  desiredWeeklyFrequency,
}: CreateGoalRequest): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500))

  const newGoal = {
    id: nanoid(),
    title,
    desiredWeeklyFrequency,
    createdAt: new Date().toISOString(),
  }

  saveGoal(newGoal)
}