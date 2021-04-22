class Slot < ApplicationRecord
  enum slot_no: { slot1: 1, slot2: 2 }
  enum status: { free: 0, reserved: 1, occupied: 2 }
end