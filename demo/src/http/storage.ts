const GOALS_KEY = 'in-orbit:goals'
const COMPLETIONS_KEY = 'in-orbit:completions'

export interface StorageGoal {
  id: string
  title: string
  desiredWeeklyFrequency: number
  createdAt: string
}

export interface StorageCompletion {
  id: string
  goalId: string
  createdAt: string
}

export function getGoals(): StorageGoal[] {
  const data = localStorage.getItem(GOALS_KEY)
  return data ? JSON.parse(data) : []
}

export function saveGoal(goal: StorageGoal) {
  const goals = getGoals()
  localStorage.setItem(GOALS_KEY, JSON.stringify([...goals, goal]))
}

export function getCompletions(): StorageCompletion[] {
  const data = localStorage.getItem(COMPLETIONS_KEY)
  return data ? JSON.parse(data) : []
}

export function saveCompletion(completion: StorageCompletion) {
  const completions = getCompletions()
  localStorage.setItem(COMPLETIONS_KEY, JSON.stringify([...completions, completion]))
}

export function clearStorage() {
  localStorage.removeItem(GOALS_KEY)
  localStorage.removeItem(COMPLETIONS_KEY)
}