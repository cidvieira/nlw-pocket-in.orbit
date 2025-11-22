import dayjs from 'dayjs'
import { getGoals, getCompletions } from './storage'

interface GoalsPerDay {
  [date: string]: {
    id: string
    title: string
    completedAt: string
  }[]
}

interface SummaryResponse {
  completed: number
  total: number
  goalsPerDay: GoalsPerDay
}

export async function getSummary(): Promise<SummaryResponse> {
  await new Promise(resolve => setTimeout(resolve, 500))

  const goals = getGoals()
  const completions = getCompletions()

  const firstDayOfWeek = dayjs().startOf('week')
  const lastDayOfWeek = dayjs().endOf('week')

  const total = goals.reduce((acc, goal) => acc + goal.desiredWeeklyFrequency, 0)

  const currentWeekCompletions = completions.filter(completion => {
    const completionDate = dayjs(completion.createdAt)
    return (
      completionDate.isAfter(firstDayOfWeek) &&
      completionDate.isBefore(lastDayOfWeek)
    )
  })

  const completed = currentWeekCompletions.length

  const goalsPerDay: GoalsPerDay = {}

  currentWeekCompletions.forEach(completion => {
    const goal = goals.find(g => g.id === completion.goalId)
    
    if (goal) {
      const dateKey = dayjs(completion.createdAt).format('YYYY-MM-DD')
      
      if (!goalsPerDay[dateKey]) {
        goalsPerDay[dateKey] = []
      }

      goalsPerDay[dateKey].push({
        id: completion.id,
        title: goal.title,
        completedAt: completion.createdAt,
      })
    }
  })

  return {
    completed,
    total,
    goalsPerDay,
  }
}