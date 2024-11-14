import React,{useState, useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthProvider'

const CreateTask = () => {

  const [userData,setUserData] = useContext(AuthContext)

    // Set initial state for form inputs
    const [formData, setFormData] = useState({
      taskTitle: '',
      date: '',
      assignTo: '',
      category: '',
      description: ''
    });
    const [newTask, setNewTask] = useState({});
    const [assignTo, setAssignTo] = useState('');

    useEffect(() => {
        
        const data = userData || [];
      
        // Check if data exists and assignTo and newTask are defined
        if (assignTo && newTask && Array.isArray(data)) {
          data.forEach((element) => {
            if (assignTo === element.firstName) {
              // Ensure tasks array exists before pushing new tasks
              element.tasks = element.tasks || [];
              element.tasks.push(newTask);
              // Increase count of newTasks
              element.taskCount.newTask = element.taskCount.newTask + 1;
            }
          });
      
          // Update localStorage with modified data
          setUserData(data)
        }
      }, [newTask, assignTo]);
                  

    // Handle input changes and update state for two-way binding
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value
      });
    };

    const submitHandler = (e)=>{
            e.preventDefault()
            
            
              // Destructure 'assignTo' from formData and store it separately
            const { assignTo, ...restFormData } = formData;
            setAssignTo(assignTo)
            setNewTask({
                ...restFormData,
                active: false,
                newTask: true,
                completed: false,
                failed: false
              });
              
            // Clear inputs after submission
        setFormData({
            taskTitle: '',
            date: '',
            assignTo: '',
            category: '',
            description: ''
        });
            
    }

    return(
    <div className='p-5 bg-[#1c1c1c] mt-7 rounded'>
        <form onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-wrap w-full justify-between items-start'>
            <div className='w-1/2'>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                    <input required name="taskTitle" value={formData.taskTitle} onChange={handleChange} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='task name'/>
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
                    <input required name='date' value={formData.date} onChange={handleChange} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="date" />
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Assign To</h3>
                    <input required name='assignTo' value={formData.assignTo} onChange={handleChange} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='Employee name'/>
                </div>

                <div>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Category</h3>
                    <input required name='category' value={formData.category} onChange={handleChange} className='text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc.' />
                </div>

            </div>
            
            <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
                    <textarea required name='description' value={formData.description} onChange={handleChange} className='w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400'  id=''></textarea>
                    <button className='bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full'>Create Task</button>
            </div>

        </form>
    </div>
    )
}

export default CreateTask 
