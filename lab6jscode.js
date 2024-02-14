
    document.addEventListener('DOMContentLoaded', () => 
    {
        const messages = document.querySelector('#messages');
        messages.style.display = 'none';
        const submitButton = document.querySelector('#submitButton');
        submitButton.addEventListener('click', submitForm);
    });
    async  function submitForm() 
    {
        const name = document.querySelector('#name').value.trim();
        const feedback = document.querySelector('#feedback').value.trim();
        if (name || feedback) 
        {
            const data = 
            {
                name: name,
                feedback: feedback
            };
            try 
            {
                const response = await fetch('https://comp165lab6-default-rtdb.firebaseio.com/msgdatabase.json', 
                {
                    method: 'POST',
                    headers: 
                    {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) 
                {
                    throw new Error('Error saving data');
                }
                //hideForm();
                hideFormFetchDataWithAsyncAwait();
            }
            catch (error) 
            {
                console.error('Error saving data: ', error.message);
            }
        } 
        else 
        {
            alert('Please fill in the field of course feedback.');
        }

    }
    function hideForm() 
    {
        const submitForm = document.querySelector('#submitForm');
        const messages = document.querySelector('#messages');

        submitForm.style.display = 'none';
        messages.style.display = 'block';
    }
    async function hideFormFetchDataWithAsyncAwait() 
    {
        hideForm();
        try
        {
            const response = await fetch('https://comp165lab6-default-rtdb.firebaseio.com/msgdatabase.json');
            if (!response.ok)
            {
                throw new Error('Error in fetching data.');
            }
            const data = await response.json();
            displayMessages(data);
        }
        catch(error)
        {
            console.error('Error fetching data: ', error.message);
        }
    }

    function displayMessages(data)
    {
        const messagesContainer = document.querySelector('#messages');
        messagesContainer.innerHTML = '';
        for (const postId in data) 
        {
            const post = data[postId];
            const post_element = document.createElement('div');
            post_element.textContent = `${post.name}: ${post.feedback}`;
            messagesContainer.appendChild(post_element);
        }
    }
