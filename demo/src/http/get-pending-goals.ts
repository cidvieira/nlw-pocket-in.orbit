import dayjs from 'dayjs'
import { getGoals, getCompletions } from './storage'

interface PendingGoal {
  id: string
  title: string
  desiredWeeklyFrequency: number
  completionCount: number
}

type PendingGoalsResponse = PendingGoal[]

export async function getPendingGoals(): Promise<PendingGoalsResponse> {
  await new Promise(resolve => setTimeout(resolve, 500))

  const goals = getGoals()
  const completions = getCompletions()

  const firstDayOfWeek = dayjs().startOf('week').toDate()
  const lastDayOfWeek = dayjs().endOf('week').toDate()

  const currentWeekCompletions = completions.filter(completion => {
    const completionDate = dayjs(completion.createdAt).toDate()
    return completionDate >= firstDayOfWeek && completionDate <= lastDayOfWeek
  })

  const pendingGoals = goals.map(goal => {
    const completionCount = currentWeekCompletions.filter(
      c => c.goalId === goal.id
    ).length

    return {
      id: goal.id,
      title: goal.title,
      desiredWeeklyFrequency: goal.desiredWeeklyFrequency,
      completionCount,
    }
  })

  return pendingGoals.filter(
    goal => goal.completionCount < goal.desiredWeeklyFrequency
  )
}