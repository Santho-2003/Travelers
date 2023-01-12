
    //   document.getElementById('button').addEventListener('click',validation())
    //   function validation(){
    //     Swal.fire({
    //     title: 'Are you sure?',
    //     text: "You won't be able to revert this!",
    //     icon: 'warning',
    //     showCancelButton: true,
    //     confirmButtonColor: '#3085d6',
    //     cancelButtonColor: '#d33',
    //     confirmButtonText: 'Yes, delete it!'
    //     }).then((result) => {
    //     if (result.isConfirmed) {
    //     Swal.fire(
    //      'Deleted!',
    //      'Your file has been deleted.',
    //      'success'
    //     )
    //     }
    //    })
    //   }
      function msg(){
        Swal.fire({
                title: 'Confirm your booking?',
                
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Confirm'
                }).then((result) => {
                if (result.isConfirmed) {
                Swal.fire(
                 
                 'Your tour has been booked.',
                 'Further details will be informed soon'
                )
                }
               })
               
        
      }
    



       