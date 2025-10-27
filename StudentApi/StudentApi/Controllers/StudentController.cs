using Microsoft.AspNetCore.Mvc;
using StudentApi.Models;
using StudentApi.Services;


namespace StudentApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StudentController : ControllerBase
    {
        private readonly StudentService _studentService;

        public StudentController(StudentService studentService)
        {
            _studentService = studentService;
        }

        [HttpGet]
        public ActionResult<List<Student>> Get() => _studentService.Get();
    }
}
