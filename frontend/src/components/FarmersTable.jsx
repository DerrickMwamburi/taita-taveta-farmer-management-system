import { useState } from 'react';

export default function FarmersTable({ farmers }) {
  return (
    <div className="table-card">
      <div className="table-header">
        Orodha ya Wakulima Waliosajiliwa
      </div>
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Area</th>
              <th>crops</th>
              <th>contact</th>
            </tr>
          </thead>
          <tbody>
            {farmers.length === 0 ? (
              <tr className="empty-state">
                <td colSpan={4}>
                  Hakuna mkulima aliyesajiliwa bado
                </td>
              </tr>
            ) : (
              farmers.map((farmer) => (
                <tr key={farmer.id}>
                  <td>{farmer.name}</td>
                  <td>{farmer.location}</td>
                  <td>{farmer.crops}</td>
                  <td>{farmer.contact}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}