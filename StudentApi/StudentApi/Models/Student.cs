using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace StudentApi.Models
{
    public class Student
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }

        [BsonElement("nom")]
        public string Nom { get; set; } = null!;

        [BsonElement("prenom")]
        public string Prenom { get; set; } = null!;

        [BsonElement("age")]
        public int Age { get; set; }
    }
}