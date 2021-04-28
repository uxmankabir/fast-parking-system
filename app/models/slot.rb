class Slot < ApplicationRecord
  enum slot_no: { slot1: 1, slot2: 2 }
  enum status: { free: 0, reserved: 1, occupied: 2 }

  def reserved_minutes
    5 - ((Time.current - created_at) / 1.minute).round
  end
end
