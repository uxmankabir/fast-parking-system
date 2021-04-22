class CreateSlots < ActiveRecord::Migration[5.1]
  def change
    create_table :slots do |t|
      t.integer :slot_no
      t.string :name
      t.string :vehicle_no
      t.string :vehicle_model
      t.integer :status

      t.timestamps
    end
  end
end
