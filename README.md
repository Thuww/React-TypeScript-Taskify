# TASKIFY APP

## 1/ INTRODUCTION
Welcome to my first React project: **Taskify App**. I learned how to create it based on a [tutorial](https://www.youtube.com/watch?v=FJDVKeh7RJI) from freeCodeCamp.org on YouTube.

<p align="center">
<img src ="https://github.com/Thuww/React-TypeScript-Taskify/assets/104199504/2224aa93-5e69-498d-aeb8-a7d1e3448bde"/>
</p>

This app allows you to create and manage your to-do list. You can edit, remove, or mark a task as done. Additionally, you can drag and drop tasks to rearrange your to-do list.

## 2/ HOW IT WORKS
### a. Creating a new task:
To create a new task, you must **click on** the *input box* and enter your task. Then click the *“Go” button* or press the *"Enter" key* on your keyboard. Your new task will appear on **"Active Tasks"** item.

I used the *useState()* Hook to set up the create task feature. You can watch it in **"InputField.tsx"** component.

### b. Managing your tasks
- **Editing**: If you want to edit one of your tasks, click on the **“Edit” button** next to that task. The input box will appear, and after editing your task, *press Enter key* to submit.
- **Removing**: If you want to remove one of your tasks, click on the **“Remove” button** next to that task. The task will be removed from the list.
- **Marking as done**: If you want to mark one of your tasks as done, click on the **“Tick” button** next to that task. The task will be crossed out.

I used the *useState()* Hook to set up all these operations. You can watch it in **"SingleTodo.tsx"** component.

### c. Dragging and dropping
You can rearrange your to-do list by dragging and dropping tasks. Simply select a task, drag it to the position you want on **"Active Tacks"** or **"Completed Tasks"** item, and drop it. Your todo list will be arranged logically according to your wishes.

I used the [react-beautiful-dnd](https://www.npmjs.com/package/react-beautiful-dnd?activeTab=dependencies) to set up the to-do list and drag/drop feature. You can watch it in **"TodoList.tsx"** component.

***
*These are all the features of my app. I hope it helps you manage your to-do list more easily!*