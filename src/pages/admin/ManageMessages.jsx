import { useState, useEffect } from "react";
import { Mail, Trash2, Clock } from "lucide-react";
import axios from "axios";

const ManageMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMessages();
  }, []);

  const fetchMessages = async () => {
    try {
      const token = localStorage.getItem("adminToken");
      const response = await axios.get("http://localhost:5000/api/messages", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this message?")) return;

    const token = localStorage.getItem("adminToken");
    try {
      await axios.delete(`http://localhost:5000/api/messages/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchMessages();
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (loading) {
    return <div className="text-center py-12">Loading messages...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Contact Messages</h2>

      {messages.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <Mail size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">No messages yet</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message._id}
              className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-lg">{message.name}</h3>
                  <a
                    href={`mailto:${message.email}`}
                    className="text-primary-600 hover:underline">
                    {message.email}
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 text-sm text-gray-500">
                    <Clock size={16} />
                    {formatDate(message.createdAt)}
                  </div>
                  <button
                    onClick={() => handleDelete(message._id)}
                    className="text-red-600 hover:text-red-700">
                    <Trash2 size={20} />
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <p className="text-gray-700 whitespace-pre-wrap">
                  {message.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ManageMessages;
