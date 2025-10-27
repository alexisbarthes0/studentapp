using Microsoft.Extensions.Options;
using StudentApi.Models;
using MongoDB.Driver;

namespace StudentApi.Services
{
    public class StudentService
    {
        private readonly IMongoCollection<Student> _students;

        public StudentService(IConfiguration config)
        {
            var client = new MongoClient(config["MongoDB:ConnectionString"]);
            var database = client.GetDatabase(config["MongoDB:DatabaseName"]);
            _students = database.GetCollection<Student>(config["MongoDB:CollectionName"]);
        }

        public List<Student> Get() => _students.Find(s => true).ToList();
    }
}