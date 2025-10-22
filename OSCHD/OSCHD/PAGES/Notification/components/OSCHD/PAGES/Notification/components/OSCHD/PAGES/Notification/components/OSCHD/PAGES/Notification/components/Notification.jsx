"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";

/**
 * Notification Component
 * ---------------------------------------
 * Displays a single notification card.
 *
 * Props:
 *  - type: "info" | "success" | "warning" | "error"
 *  - message: string
 *  - timestamp: string
 *  - onClose: () => void (optional)
 *
 * Example:
 *  <Notification
 *    type="success"
 *    message="Your report was successfully uploaded!"
 *    timestamp="2 minutes ago"
 *    onClose={() => setShow(false)}
 *  />
 */
export default function Notification({
  type = "info",
  message,
  timestamp,
  onClose,
}) {
  const variants = {
    info: {
      container: "bg-blue-50 border-blue-200 text-blue-800",
      icon: "ℹ️",
    },
    success: {
      container: "bg-green-50 border-green-200 text-green-800",
      icon: "✅",
    },
    warning: {
      container: "bg-yellow-50 border-yellow-200 text-yellow-800",
      icon: "⚠️",
    },
    error: {
      container: "bg-red-50 border-red-200 text-red-800",
      icon: "❌",
    },
  };

  const { container, icon } = variants[type] || variants.info;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      className={`relative flex items-start gap-3 p-4 border rounded-xl shadow-sm ${container}`}
    >
      {/* Icon */}
      <div className="text-xl">{icon}</div>

      {/* Message and Timestamp */}
      <div className="flex-1">
        <p className="text-sm font-medium">{message}</p>
        {timestamp && (
          <span className="block text-xs text-gray-600 mt-1">
            {timestamp}
          </span>
        )}
      </div>

      {/* Close Button */}
      {onClose && (
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 transition"
        >
          <X size={16} />
        </button>
      )}
    </motion.div>
  );
}
