import React from 'react'

const EnquiryList = () => {
  
  return (
    
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="px-6 py-3">
                    Sr.N..
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Name
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Phone
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Message
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action1
                  </th>
                  <th scope="col" class="px-6 py-3">
                    Action2
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
                  <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    1.
                  </th>
                  <td class="px-6 py-4">
                    ganesh
                  </td>
                  <td class="px-6 py-4">
                    gane@gmail.com
                  </td>
                  <td class="px-6 py-4">
                    808843
                  </td>
                  <td class="px-6 py-4">
                    message is written...
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                  </td>
                  <td class="px-6 py-4">
                    <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Delete</a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
    
  )
}

export default EnquiryList
