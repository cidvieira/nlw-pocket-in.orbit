import { nanoid } from 'nanoid'
import { saveCompletion } from './storage'

export async function createGoalCompletion(goalId: string): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, 500))

  const newCompletion = {
    id: nanoid(),
    goalId,
    createdAt: new Date().toISOString(),
  }

  saveCompletion(newCompletion)
}